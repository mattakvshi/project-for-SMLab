create or replace package web_utils is

    function cursor_to_json
        (
            p_cursor    in sys_refcursor,
            p_structure in clob   :=    '',
            p_is_object in number :=    0
        )
        return clob;

    function cursor_to_json_array
        (
            p_cursor    in sys_refcursor,
            p_structure in clob :=      ''
        )
        return json_array_t;

    function date_to_unix_timestamp(p_date in date) return number;

end web_utils;
/
create or replace package body web_utils is

    -- Преобразование текста_с_нижним_подчеркиванием в кэмлКейс
    function string_to_camel_case(p_str in varchar2) return varchar2
        is
    begin
        return substr(lower(replace(p_str, '_', ' ')), 1, 1) ||
               substr(replace(initcap(replace(p_str, '_', ' ')), ' '), 2);
    end;

    -- Преобразование даты в Oracle формате в Unix формат
    function date_to_unix_timestamp(p_date in date) return number
        is
    begin
        return (to_date(trunc(p_date), 'DD.MM.RRRR') - to_date('01.01.1970', 'DD.MM.RRRR')) * 86400 * 1000;
    end;

    -- Преобразование ораклового курсора в json формат
    function cursor_to_json
        (
            p_cursor    in sys_refcursor,
            p_structure in clob   :=    '',
            p_is_object in number :=    0
        )
        return clob
    is
        l_array json_array_t;
    begin
        -- Получаем массив объектов 
        l_array := web_utils.cursor_to_json_array(p_cursor, p_structure);
        
        -- Преобразовываем массив в clob
        if (l_array.get_size = 1) and (p_is_object = 1) then
            return l_array.get(0).to_clob;
        else
            return l_array.to_clob;
        end if;
    end;
    
    -- Преобразуем курсор в массив объектов
    function cursor_to_json_array
        (
            p_cursor    in sys_refcursor,
            p_structure in clob :=      ''
        )
        return json_array_t
    is
        v_result  json_array_t;
        v_element json_object_t;
        v_record  number;
    begin
        v_result := new json_array_t;
        
        if not p_cursor%isopen then
            ut.ut_utils.myerror(-20001, 'Cursor is not opened.');
        end if;
        
        for rvd in
            (
                with
                    data as
                        (
                            select
                                rownum         as record_num,
                                t.column_value as record_value
                            from
                                table(xmlsequence(p_cursor)) t
                        )
                select
                    t.record_num,
                    t2.column_value.getrootelement()        name,
                    extractvalue(t2.column_value, 'node()') value
                from
                    data t,
                    table(xmlsequence(extract(t.record_value, '/ROW/node()'))) t2
                order by
                    1,
                    2
            )
        loop
            -- Получим объект
            if rvd.record_num != nvl(v_record, -1) then
                v_record := rvd.record_num;
                if v_element is not null then
                    v_result.append(v_element);
                end if;
                v_element := new
                json_object_t;
            end if;
            -- Получим у объекта состав полей и преобразуем в соответствии с структурой входной
            case json_object_t.parse(nvl(p_structure, '{}')).get_string(lower(rvd.name))
                when 'number' then
                    v_element.put(string_to_camel_case(rvd.name), to_number(rvd.value));
                when 'date' then
                    v_element.put(string_to_camel_case(rvd.name), to_date(rvd.value));
                else
                    v_element.put(string_to_camel_case(rvd.name), rvd.value);
            end case;
        end loop;
        
        v_result.append(v_element);
        
        return v_result;
    end;

end web_utils;
/
