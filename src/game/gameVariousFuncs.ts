export const getChampClass = (champClass:ChampClass | undefined):string =>
{   
    if (champClass === 0) {
        return 'Warrior';
    } else if (champClass === 1) {
        return 'Mage';
    } else if (champClass === 2) {
        return 'Hunter';
    } else return 'ERROR CLASS NOT FOUND';
}