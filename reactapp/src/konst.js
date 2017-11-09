const AppMode = Object.freeze(
{
    Calendar:   Symbol("calendar"),
    Directory:  Symbol("directory"),
    None: 		Symbol("none")
});

const SearchMode = Object.freeze({
    Word:   Symbol('word'),
    Tag:  Symbol('tag'),
    List: Symbol('list'),
    None: Symbol('none')
});

export default { AppMode, SearchMode }