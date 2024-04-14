-- Студенты
-- truncate table ks_students;
insert into ks_students(first_name, second_name, last_name)
values('Дана', 'Владимировна', 'Кузьмина');

insert into ks_students(first_name, second_name, last_name)
values('Оксана', 'Сергеевна', 'Попеляева');

insert into ks_students(first_name, second_name, last_name)
values('Диана', null, 'Давыдова');

insert into ks_students(first_name, second_name, last_name)
values('Андрей', 'Витальевич', 'Косиков');

insert into ks_students(first_name, second_name, last_name)
values('Александра', 'Алексеевна', 'Шульга');

insert into ks_students(first_name, second_name, last_name)
values('Кристина', 'Викторовна', 'Франк');

insert into ks_students(first_name, second_name, last_name)
values('Влад', 'Антонович', 'Кувайцев');

insert into ks_students(first_name, second_name, last_name)
values('Николай', null, 'Кифоренко');

insert into ks_students(first_name, second_name, last_name)
values('Святослав', null, 'Шубин');

insert into ks_students(first_name, second_name, last_name)
values('Илья', null, 'Толстиков');

insert into ks_students(first_name, second_name, last_name)
values('Степан', 'Евгеньевич', 'Бабаков');

insert into ks_students(first_name, second_name, last_name)
values('Михаил', null, 'Корнийченко');

-- Курсы
-- truncate table ks_courses
insert into ks_courses(name, date_start, date_end)
values('Oracle + Vue', to_date('01.12.2020','DD.MM.YYYY'), to_date('01.07.2021','DD.MM.YYYY'));

-- Связь студентов и курса
-- truncate table ks_link_student_course;
insert into ks_link_student_course(student_code, course_code, date_start, date_end)
select 
    a1.code, 
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    null
from 
    ks_students a1,
    ks_courses a2;
    
-- Текущие оценки успеваемости
-- truncate table ks_grades_list;
insert into ks_grades_list(student_code, course_code, grade_date, grade)
select 
    a1.code,
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    19
from 
    ks_students a1,
    ks_courses  a2
where 
    a1.last_name = 'Кузьмина';

insert into ks_grades_list(student_code, course_code, grade_date, grade)
select 
    a1.code,
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    15
from 
    ks_students a1,
    ks_courses  a2
where 
    a1.last_name = 'Попеляева';

insert into ks_grades_list(student_code, course_code, grade_date, grade)
select 
    a1.code,
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    15
from 
    ks_students a1,
    ks_courses  a2
where 
    a1.last_name = 'Давыдова';        

insert into ks_grades_list(student_code, course_code, grade_date, grade)
select 
    a1.code,
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    20
from 
    ks_students a1,
    ks_courses  a2
where 
    a1.last_name = 'Косиков';

insert into ks_grades_list(student_code, course_code, grade_date, grade)
select 
    a1.code,
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    10
from 
    ks_students a1,
    ks_courses  a2
where 
    a1.last_name = 'Шульга';    
insert into ks_grades_list(student_code, course_code, grade_date, grade)
select 
    a1.code,
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    15
from 
    ks_students a1,
    ks_courses  a2
where 
    a1.last_name = 'Франк';

insert into ks_grades_list(student_code, course_code, grade_date, grade)
select 
    a1.code,
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    25
from 
    ks_students a1,
    ks_courses  a2
where 
    a1.last_name = 'Кувайцев';

insert into ks_grades_list(student_code, course_code, grade_date, grade)
select 
    a1.code,
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    15
from 
    ks_students a1,
    ks_courses  a2
where 
    a1.last_name = 'Кифоренко';

insert into ks_grades_list(student_code, course_code, grade_date, grade)
select 
    a1.code,
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    13
from 
    ks_students a1,
    ks_courses  a2
where 
    a1.last_name = 'Шубин';

insert into ks_grades_list(student_code, course_code, grade_date, grade)
select 
    a1.code,
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    20
from 
    ks_students a1,
    ks_courses  a2
where 
    a1.last_name = 'Толстиков';

insert into ks_grades_list(student_code, course_code, grade_date, grade)
select 
    a1.code,
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    15
from 
    ks_students a1,
    ks_courses  a2
where 
    a1.last_name = 'Бабаков';

insert into ks_grades_list(student_code, course_code, grade_date, grade)
select 
    a1.code,
    a2.code,
    to_date('01.12.2020','DD.MM.YYYY'),
    10
from 
    ks_students a1,
    ks_courses  a2
where 
    a1.last_name = 'Корнийченко';

    
