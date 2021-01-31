// export class Battle {
//     player:Champion;
//     enemy:Champion | Character;
//     private place:Place;
//     private isPlayerTurn:boolean;
//     private isBattleEnded:boolean;
//     constructor(player:Champion, enemy:Champion | Character, place:Place) {
//         this.player = player;
//         this.enemy = enemy;
//         this.place = place;
//         this.isPlayerTurn = true;
//         this.isBattleEnded = false;
//     }

//     load() {
//         return [this.player, this.enemy, this.place]}

//     play() {
//         const id = window.setInterval(() => {if (!this.isBattleEnded) {
//             if (!this.isPlayerTurn){window.setTimeout(() => {
//                 basicAttack(this.enemy,this.player);
//                 if (this.player.hp.currentHp <= 0 || this.enemy.hp.currentHp <= 0) {
//                     this.isBattleEnded = true;
//                 }
//                 this.isPlayerTurn = true;
//             }, 1500)}
//         }}, 500)
        
//         if (this.isBattleEnded) {
//             window.clearInterval(id);
//         }

//     }
// }



export const basicAttack = (attacker:Champion | Enemy, defender:Champion | Enemy):AttackResult => {
    const result:AttackResult = {
        damage:0,
        statusText:``,
        statusCode:-1
    };
    const randomAttNum = Math.round(Math.random() * 100);
    const randomDefNum = Math.round(Math.random() * 100);

    if (randomDefNum < defender.blockChance) {
        result.statusText = 'Attack blocked!'
        result.statusCode = 1
        return result
    }

    if (randomAttNum + attacker.accuracy < randomDefNum + defender.dodgeChance) {
        result.statusText = 'Attack missed!'
        result.statusCode = 0
        return result
    }

    let critModifier:number = 1;

    if (randomAttNum < attacker.critChance) {
        
        result.statusCode = 2
        critModifier = 2;
    }

    const isLvlBigger = attacker.level > defender.level ? true : false;

    if (isLvlBigger) {
        result.damage = randomAttNum * critModifier - (defender.armor / 2)
    } else {
        result.damage = randomAttNum * critModifier - defender.armor
    }

    if(critModifier === 2) { result.statusText = `Critical strike! Dealt ${result.damage} damage!`} else {
        result.statusText = `Attack dealt ${result.damage} damage!`
    }

    if (result.damage <= 0) {
        result.statusText = 'Attack blocked!'
        result.statusCode = 1
        return result
    }

    
    return result;

}

