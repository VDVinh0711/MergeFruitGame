const TypeOfEmoji =
{
    Angry: 'Angry',
    Sick: 'Sick',
    Sad: 'Sad',
    Normal: 'Normal',
    Happy: 'Happy',
    Wow: 'Wow',
    Funny: 'Funny'
}



const FruitDatas = {
    Angry: createFruit(TypeOfEmoji.Angry, './Asset/Emoji/Angry.png', 30, 10),
    Sick: createFruit(TypeOfEmoji.Sick, './Asset/Emoji/Sick.png', 35, 20),
    Sad: createFruit(TypeOfEmoji.Sad, './Asset/Emoji/Sad.png', 40, 30),
    Normal: createFruit(TypeOfEmoji.Normal, './Asset/Emoji/Normal.png', 45, 40),
    Happy: createFruit(TypeOfEmoji.Happy, './Asset/Emoji/Happy.png', 50, 50),
    Wow: createFruit(TypeOfEmoji.Wow, './Asset/Emoji/WOW.png', 55, 60),
    Funny: createFruit(TypeOfEmoji.Funny, './Asset/Emoji/Funny.png', 60, 70),
};

function createFruit(type, srcIMG, radius, score) {
    return {
        type,
        srcIMG,
        radius,
        score,
    };
}







export default class EmojiDatas {
    static GetListEmojiDatas() {
        let listFruits = Object.values(TypeOfEmoji);
        return listFruits;
    }
    static GetLastEmoji() {
        let listFruits = Object.values(TypeOfEmoji);
        const lastIndex = listFruits.length - 1;
        return   EmojiDatas.GetAssetEmoji(listFruits[lastIndex]);
    }
    static GetRandomTypeEmoji() {
        const fruits = Object.values(TypeOfEmoji);

        const randomIndex = Math.floor(Math.random() * fruits.length / 2);
        return fruits[randomIndex];
    }

    static GetAssetEmoji(type) {
        return Object.values(FruitDatas).find(fruit => fruit.type === type);
    }

    static getNextEmoji(current) {
        const fruits = Object.values(TypeOfEmoji);
        const currentIndex = fruits.indexOf(current);
        if (currentIndex === -1) {
            throw new Error('Emoji not found');
        }
        const nextIndex = (currentIndex + 1) % fruits.length;
        return EmojiDatas.GetAssetEmoji(fruits[nextIndex]);
    }
}





