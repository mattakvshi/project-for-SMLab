import { createPinia } from "pinia";

const pinia = createPinia();


export function usePinia(app){
    app.usePinia(pinia);
}

export default pinia;