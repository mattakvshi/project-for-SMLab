<template>
    <div>
        <grd-grid></grd-grid>
        <grd-dialog></grd-dialog>
    </div>
</template>

<script>
// @ is an alias to /src
import GrdGrid from '@/components/grade/GrdGrid.vue'
import GrdDialog from '../components/grade/GrdDialog.vue'

export default {
    name: 'Grades',
    
    components: {
        GrdGrid,
        GrdDialog
    }
}
</script>
