export default function(getList){
    const pageNum = ref(1)
    const pageSize = ref(10)
    const isMounted = ref(false)
    const searchVal = ref()
    let param
    let info =ref<any>({
        total:0
    })

    function handleSizeChange(val)
}