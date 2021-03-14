// put command definition here

export const processMessage = (msg: string): string | null => {

    switch (msg.trim()) {
        case '!ga':
            return gaCommand()

        default:
            return null
    }

}


const gaCommand = (): string => {
    return `blablablablabal`
}
