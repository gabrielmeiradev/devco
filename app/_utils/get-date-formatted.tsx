enum EDateTypes {
    ptBR,
}

const insertZeros = (num: number): string => {
    if(num <= 9) return `0${num}`
    return String(num)
}

export default function getDateFormatted(date: Date, format: string | EDateTypes) {
    if(format == EDateTypes.ptBR) {
        return getDateFormatted(date, "dd/mm/yyyy");
    }

    return format
            .replace("dd", insertZeros(date.getDay()))
            .replace("mm", insertZeros(date.getMonth()))
            .replace("yyyy", date.getFullYear().toString())
            .replace("yy", date.getFullYear().toString().substring(2, 4))
}

