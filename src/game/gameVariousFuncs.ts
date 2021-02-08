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

export const getChampionWithEquippedItem = (champ:Champion, item:Item) => {
    const champToReplace = {...champ}
    switch (item.type){
        case 'head':
            champToReplace.itemSlots.head = item;
            break;
        case 'body':
            champToReplace.itemSlots.body = item;
            break;
        case 'legs':
            champToReplace.itemSlots.legs = item;
            break;
        case 'feet':
            champToReplace.itemSlots.feet = item;
            break;
        case 'neck':
            champToReplace.itemSlots.neck = item;
            break;
        case 'rightHand':
            champToReplace.itemSlots.rightHand = item;
            break;
        case 'leftHand':
            champToReplace.itemSlots.leftHand = item;
            break;
        default:
            return champToReplace;              
    }   
    

    return champToReplace;
       

}