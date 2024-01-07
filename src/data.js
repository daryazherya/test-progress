export const stages = [
    {
        name: "Этап первый",
        id: 1,
        thresholdPoints: 25,
        games: [
            {
                name: "Игра 1.1",
                bestResult: 16,
                isPlayed: true,
            },
            {
                name: "Игра 1.2",
                bestResult: 9,
                isPlayed: true,
            }
        ],
    },
    {
        name: "Этап второй",
        id: 2,
        thresholdPoints: 50,
        games: [
            {
                name: "Игра 2.1",
                bestResult: 4,
                isPlayed: true,
            },
            {
                name: "Игра 2.2",
                bestResult: 22,
                isPlayed: true,
            },
        ],
    },
    {
        id: 3,
        name: "Этап третий",
        thresholdPoints: 100,
        games: [
            {
                name: "Игра 3.1",
                bestResult: 22,
                isPlayed: true,
            },
        ],
    },
    {
        id: 4,
        name: "Этап четвертый",
        thresholdPoints: 200,
        games: [
            {
                name: "Игра 4.1",
                bestResult: 0,
                isPlayed: false,
            },
        ],
    },
    {
        id: 5,
        name: "Босс",
        thresholdPoints: 500,
        games: [
            {
                name: "Игра 5.1",
                bestResult: 0,
                isPlayed: false,
            },
        ],
    },
];