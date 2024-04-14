<template>
    <v-row justify="center">
        <v-dialog
            v-model="$store.state.grade.newGradeDialog"
            persistent
            max-width="600px"
        >
            <v-card>
                <v-card-title>
                    <span class="headline">Новый грейд</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <v-select
                                    :items="Array.from($store.state.grade.courses.values())"
                                    item-text="name"
                                    item-value="code"
                                    v-model="newGrade.courseCode"
                                    :error="!(!!newGrade.courseCode)"
                                    label="Курс*"
                                    required
                                ></v-select>
                            </v-col>

                            <v-col cols="12" sm="12">
                                <v-autocomplete
                                    :items="Array.from($store.state.student.students.values())"
                                    item-text="fullName"
                                    item-value="code"
                                    v-model="newGrade.studentCode"
                                    :error="!(!!newGrade.studentCode)"
                                    label="Студент*"
                                    required
                                ></v-autocomplete>
                            </v-col>

                            <v-col cols="12" sm="12">
                                <v-text-field
                                    v-model="newGrade.grade"
                                    :rules="[rules.grade]"
                                    :error="!(!!newGrade.grade)"
                                    label="Грейд"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                    >
                        Закрыть
                    </v-btn>

                    <v-btn
                        color="blue darken-1"
                        text
                        @click="saveNewGrade"
                    >
                        Сохранить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import Grade from '@/model/Grade'

export default {
    name: "GrdDialog",

    data() {
        return {
            newGrade: new Grade(null, null, null, null, null, 0),
            
            rules: {
                grade: val => (val && !isNaN(val) && val >= 0 && val <= 25) || "число от 0 до 25"
            }
        }
    },

    methods: {
        init() {
            this.newGrade.courseCode = null;
            this.newGrade.studentCode = null;
            this.newGrade.grade = null;

            this.$store.state.grade.newGradeDialog = false;
        },

        close() {
            this.init();
        },

        saveNewGrade() {
            if(this.newGrade.courseCode && this.newGrade.studentCode && this.rules.grade(this.newGrade.grade) === true) {
                this.newGrade.grade = Number(this.newGrade.grade);
                
                this.$store.dispatch("grade/postGrade", this.newGrade);
                this.init();
            }
        }
    }
};
</script>
