export const ReplacePolishAndSpecialChars = (name: string): string => {
    return name
        .replaceAll(/[^A-Z0-9ęóąśłżźćń -]/ig, '')
        .replaceAll(' ', '')
        .replaceAll('ę', 'e')
        .replaceAll('ó', 'o')
        .replaceAll('ą', 'a')
        .replaceAll('ł', 'l')
        .replaceAll('ś', 's')
        .replaceAll('ż', 'z')
        .replaceAll('ź', 'z')
        .replaceAll('ć', 'c')
        .replaceAll('ń', 'n')
}
