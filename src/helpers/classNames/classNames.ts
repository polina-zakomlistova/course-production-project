type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods,
    additional: string[]
): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods) //разбираем на картеж [[key,value],[key,value]]
            .filter(([className, value]) => Boolean(value)) //отфильтровываем только true
            .map(([className]) => className), //массив классов
    ].join(' ');
}
// classNames( 'remove-btn', {hovered: false, red: true}, ['pdg']})
