import { useEffect , useState } from "react";
import { useNavigate} from 'react-router-dom';
import play_button from './play.png';

const results = [
    {
        "adult": false,
        "backdrop_path": "/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg",
        "genre_ids": [
            27,
            53,
            14
        ],
        "id": 713704,
        "original_language": "en",
        "original_title": "Evil Dead Rise",
        "overview": "Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
        "popularity": 5030.612,
        "poster_path": "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
        "release_date": "2023-04-12",
        "title": "Evil Dead Rise",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 1017
    },
    {
        "adult": false,
        "backdrop_path": "/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 640146,
        "original_language": "en",
        "original_title": "Ant-Man and the Wasp: Quantumania",
        "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
        "popularity": 3023.011,
        "poster_path": "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
        "release_date": "2023-02-15",
        "title": "Ant-Man and the Wasp: Quantumania",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 2525
    },
    {
        "adult": false,
        "backdrop_path": "/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            14,
            35
        ],
        "id": 502356,
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        "popularity": 4675.159,
        "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "release_date": "2023-04-05",
        "title": "The Super Mario Bros. Movie",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 2202
    },
    {
        "adult": false,
        "backdrop_path": "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
        "genre_ids": [
            27,
            53,
            14
        ],
        "id": 758323,
        "original_language": "en",
        "original_title": "The Pope's Exorcist",
        "overview": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
        "popularity": 2378.68,
        "poster_path": "/4IjRR2OW2itjQWQnmlUzvwLz9DQ.jpg",
        "release_date": "2023-04-05",
        "title": "The Pope's Exorcist",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 971
    },
    {
        "adult": false,
        "backdrop_path": "/99NBEpQEM4uLItZY2RquqdqdSXM.jpg",
        "genre_ids": [
            878,
            12,
            28
        ],
        "id": 447365,
        "original_language": "en",
        "original_title": "Guardians of the Galaxy Vol. 3",
        "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        "popularity": 2137.214,
        "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
        "release_date": "2023-05-03",
        "title": "Guardians of the Galaxy Vol. 3",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1200
    },
    {
        "adult": false,
        "backdrop_path": "/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg",
        "genre_ids": [
            28,
            35,
            10749
        ],
        "id": 868759,
        "original_language": "en",
        "original_title": "Ghosted",
        "overview": "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
        "popularity": 1732.717,
        "poster_path": "/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
        "release_date": "2023-04-18",
        "title": "Ghosted",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 784
    },
    {
        "adult": false,
        "backdrop_path": "/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg",
        "genre_ids": [
            28,
            35,
            14,
            12
        ],
        "id": 594767,
        "original_language": "en",
        "original_title": "Shazam! Fury of the Gods",
        "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
        "popularity": 1632.305,
        "poster_path": "/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
        "release_date": "2023-03-15",
        "title": "Shazam! Fury of the Gods",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 1603
    },
    {
        "adult": false,
        "backdrop_path": "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
        "genre_ids": [
            878,
            12,
            28
        ],
        "id": 76600,
        "original_language": "en",
        "original_title": "Avatar: The Way of Water",
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "popularity": 1636.43,
        "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "release_date": "2022-12-14",
        "title": "Avatar: The Way of Water",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 7998
    },
    {
        "adult": false,
        "backdrop_path": "/zPEDfWece7gg1I0904KFFVUq5mg.jpg",
        "genre_ids": [
            53,
            28,
            80
        ],
        "id": 1102776,
        "original_language": "fr",
        "original_title": "AKA",
        "overview": "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
        "popularity": 1399.383,
        "poster_path": "/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
        "release_date": "2023-04-28",
        "title": "AKA",
        "video": false,
        "vote_average": 7,
        "vote_count": 257
    },
    {
        "adult": false,
        "backdrop_path": "/cEyhk8tZWubni71M6plwLMQFOIX.jpg",
        "genre_ids": [
            28,
            80
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 1623.73,
        "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 29
    },
    {
        "adult": false,
        "backdrop_path": "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
        "genre_ids": [
            18,
            28
        ],
        "id": 677179,
        "original_language": "en",
        "original_title": "Creed III",
        "overview": "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
        "popularity": 1242.591,
        "poster_path": "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
        "release_date": "2023-03-01",
        "title": "Creed III",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 1357
    },
    {
        "adult": false,
        "backdrop_path": "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 934433,
        "original_language": "en",
        "original_title": "Scream VI",
        "overview": "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
        "popularity": 1196.76,
        "poster_path": "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
        "release_date": "2023-03-08",
        "title": "Scream VI",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 1165
    },
    {
        "adult": false,
        "backdrop_path": "/wUwFMnbFxuDfcRSGGT7QQIGDRrH.jpg",
        "genre_ids": [
            27
        ],
        "id": 785759,
        "original_language": "en",
        "original_title": "Two Witches",
        "overview": "A matriarchal witch passes on her sinister inheritance to her grand-daughter, triggering the most horrific curses.",
        "popularity": 879.202,
        "poster_path": "/uL9fFTdNmUUlKIJfHJclN5X3bxH.jpg",
        "release_date": "2023-03-02",
        "title": "Two Witches",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 45
    },
    {
        "adult": false,
        "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
        "genre_ids": [
            28,
            53,
            80
        ],
        "id": 603692,
        "original_language": "en",
        "original_title": "John Wick: Chapter 4",
        "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        "popularity": 1175.963,
        "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        "release_date": "2023-03-22",
        "title": "John Wick: Chapter 4",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1403
    },
    {
        "adult": false,
        "backdrop_path": "/aRJjCgp4uVUkXhDw8NClesQXbt3.jpg",
        "genre_ids": [
            53,
            28
        ],
        "id": 727340,
        "original_language": "ko",
        "original_title": "헌트",
        "overview": "After a high-ranking North Korean official requests asylum, KCIA Foreign Unit chief Park Pyong-ho and Domestic Unit chief Kim Jung-do are tasked with uncovering a North Korean spy, known as Donglim, who is deeply embedded within their agency. When the spy begins leaking top secret intel that could jeopardize national security, the two units are each assigned to investigate each other.",
        "popularity": 937.266,
        "poster_path": "/tDe5eLxAbeK7sYckUn5aH3ngWnn.jpg",
        "release_date": "2022-08-10",
        "title": "Hunt",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 68
    },
    {
        "adult": false,
        "backdrop_path": "/xwA90BwZXTh8ke3CVsQlj8EOkFr.jpg",
        "genre_ids": [
            28,
            12,
            36,
            18,
            10752
        ],
        "id": 948713,
        "original_language": "en",
        "original_title": "The Last Kingdom: Seven Kings Must Die",
        "overview": "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
        "popularity": 861.928,
        "poster_path": "/7yyFEsuaLGTPul5UkHc5BhXnQ0k.jpg",
        "release_date": "2023-04-14",
        "title": "The Last Kingdom: Seven Kings Must Die",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 353
    },
    {
        "adult": false,
        "backdrop_path": "/yx96Xz7ggs7TMmDqAa8G5oJ5ami.jpg",
        "genre_ids": [
            37,
            28
        ],
        "id": 1111140,
        "original_language": "en",
        "original_title": "Two Sinners and a Mule",
        "overview": "Kicked out of a small Western town for sinful behavior, free-spirited Alice and Nora set out for Virginia City to pursue their dream of opening a restaurant. Out on the prairie, they come across an injured bounty hunter named Elden. Hoping to share in the reward, they nurse Elden back to health and help him stalk his prey, Grimes. But as Nora and Alice both develop feelings for Elden, no one notices that Grimes is now on their tail, and the hunters become the hunted…",
        "popularity": 808.746,
        "poster_path": "/icL1zn5z1L5ULIpxkuOLjeUgURY.jpg",
        "release_date": "2023-04-21",
        "title": "Two Sinners and a Mule",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 13
    },
    {
        "adult": false,
        "backdrop_path": "/8HfjrSxfTVKmjNh8cJjbu5eXzcX.jpg",
        "genre_ids": [
            10751,
            14,
            28,
            12
        ],
        "id": 420808,
        "original_language": "en",
        "original_title": "Peter Pan & Wendy",
        "overview": "Wendy Darling, a young girl afraid to leave her childhood home behind, meets Peter Pan, a boy who refuses to grow up. Alongside her brothers and a tiny fairy, Tinker Bell, she travels with Peter to the magical world of Neverland. There, she encounters an evil pirate captain, Captain Hook, and embarks on a thrilling adventure that will change her life forever.",
        "popularity": 843.455,
        "poster_path": "/9NXAlFEE7WDssbXSMgdacsUD58Y.jpg",
        "release_date": "2023-04-20",
        "title": "Peter Pan & Wendy",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 338
    },
    {
        "adult": false,
        "backdrop_path": "/eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
        "genre_ids": [
            10752,
            28,
            53
        ],
        "id": 882569,
        "original_language": "en",
        "original_title": "Guy Ritchie's The Covenant",
        "overview": "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
        "popularity": 971.204,
        "poster_path": "/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg",
        "release_date": "2023-04-19",
        "title": "Guy Ritchie's The Covenant",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 113
    },
    {
        "adult": false,
        "backdrop_path": "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
        "genre_ids": [
            16,
            10751,
            14,
            12,
            35
        ],
        "id": 315162,
        "original_language": "en",
        "original_title": "Puss in Boots: The Last Wish",
        "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        "popularity": 762.963,
        "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        "release_date": "2022-12-07",
        "title": "Puss in Boots: The Last Wish",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 5520
    },
    {
        "adult": false,
        "backdrop_path": "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
        "genre_ids": [
            878,
            12,
            28,
            35
        ],
        "id": 283995,
        "original_language": "en",
        "original_title": "Guardians of the Galaxy Vol. 2",
        "overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
        "popularity": 600.122,
        "poster_path": "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
        "release_date": "2017-04-19",
        "title": "Guardians of the Galaxy Vol. 2",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 19686
    },
    {
        "adult": false,
        "backdrop_path": "/fC6TZRnySFZ7RMYdOA4Yt21q0Y9.jpg",
        "genre_ids": [
            12,
            14,
            35
        ],
        "id": 493529,
        "original_language": "en",
        "original_title": "Dungeons & Dragons: Honor Among Thieves",
        "overview": "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
        "popularity": 771.163,
        "poster_path": "/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg",
        "release_date": "2023-03-23",
        "title": "Dungeons & Dragons: Honor Among Thieves",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1196
    },
    {
        "adult": false,
        "backdrop_path": "/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg",
        "genre_ids": [
            35,
            80
        ],
        "id": 638974,
        "original_language": "en",
        "original_title": "Murder Mystery 2",
        "overview": "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.",
        "popularity": 665.751,
        "poster_path": "/s1VzVhXlqsevi8zeCMG9A16nEUf.jpg",
        "release_date": "2023-03-28",
        "title": "Murder Mystery 2",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 1031
    },
    {
        "adult": false,
        "backdrop_path": "/w26FmegnHL8BykasYNHADIEURBW.jpg",
        "genre_ids": [
            10752,
            36,
            28
        ],
        "id": 1037644,
        "original_language": "en",
        "original_title": "Battle for Saipan",
        "overview": "On July 7, 1944, a U.S. Army hospital on the remote island of Saipan is overrun by Japanese forces during a relentless attack. Outgunned and surrounded by the enemy, a lone medic puts it all on the line to lead a band of wounded soldiers to safety.",
        "popularity": 986.721,
        "poster_path": "/aWLR3s0EpqZYXNXXHVH0GCu6Gru.jpg",
        "release_date": "2023-02-24",
        "title": "Battle for Saipan",
        "video": false,
        "vote_average": 5.3,
        "vote_count": 11
    },
    {
        "adult": false,
        "backdrop_path": "/cYyUinLXRbQwE4PAt2mQLTGBqti.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 876969,
        "original_language": "en",
        "original_title": "Assassin Club",
        "overview": "In this world of contract killers, Morgan Gaines is the best of the best. When Morgan is hired to kill six people around the world, he soon discovers all the targets are also assassins unknowingly hired to kill each other.",
        "popularity": 684.497,
        "poster_path": "/y2d2SBqK33mGOG2CqAYMo3YbWE4.jpg",
        "release_date": "2023-02-24",
        "title": "Assassin Club",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 48
    },
    {
        "adult": false,
        "backdrop_path": "/bF2skCyB5jeJuO26GFaQIGHrMNl.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 1085103,
        "original_language": "en",
        "original_title": "Clock",
        "overview": "On the eve of her 38th birthday, a woman desperately attempts to fix her broken biological clock.",
        "popularity": 523.532,
        "poster_path": "/m6Yt77C9u7Aume9dTJMCSRzWDED.jpg",
        "release_date": "2023-03-28",
        "title": "Clock",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 73
    },
    {
        "adult": false,
        "backdrop_path": "/3uHDuQCoJQ6DhRlI3frd7p9WSE2.jpg",
        "genre_ids": [
            18,
            35
        ],
        "id": 868985,
        "original_language": "es",
        "original_title": "¡Que Viva México!",
        "overview": "After his grandfather's death, a man travels with his wife and kids to his hometown, where chaos ensues with his relatives over the inheritance.",
        "popularity": 1006.135,
        "poster_path": "/ieyUpr5ES9QEz1cn4clCnBf9XJl.jpg",
        "release_date": "2023-03-23",
        "title": "¡Que Viva México!",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 44
    },
    {
        "adult": false,
        "backdrop_path": "/e7FzphKs5gzoghDotAEp2FeP46u.jpg",
        "genre_ids": [
            27,
            35,
            14
        ],
        "id": 649609,
        "original_language": "en",
        "original_title": "Renfield",
        "overview": "Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.",
        "popularity": 646.622,
        "poster_path": "/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg",
        "release_date": "2023-04-07",
        "title": "Renfield",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 391
    },
    {
        "adult": false,
        "backdrop_path": "/eEF40Xk2twM3WjRNZftfo771gjv.jpg",
        "genre_ids": [
            878,
            12,
            53
        ],
        "id": 700391,
        "original_language": "en",
        "original_title": "65",
        "overview": "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
        "popularity": 497.901,
        "poster_path": "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
        "release_date": "2023-03-02",
        "title": "65",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 1035
    },
    {
        "adult": false,
        "backdrop_path": "/aT3sRVqgpkyCo23fp9myVfKPWbA.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 964980,
        "original_language": "en",
        "original_title": "Air",
        "overview": "Discover the game-changing partnership between a then undiscovered Michael Jordan and Nike's fledgling basketball division which revolutionized the world of sports and culture with the Air Jordan brand.",
        "popularity": 636.754,
        "poster_path": "/76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg",
        "release_date": "2023-04-05",
        "title": "Air",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 490
    },
    {
        "adult": false,
        "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 505642,
        "original_language": "en",
        "original_title": "Black Panther: Wakanda Forever",
        "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
        "popularity": 482.8,
        "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
        "release_date": "2022-11-09",
        "title": "Black Panther: Wakanda Forever",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 4804
    },
    {
        "adult": false,
        "backdrop_path": "/qUOJGvH8L31HL2b9Q6DGNPGCCI0.jpg",
        "genre_ids": [
            53,
            35,
            80
        ],
        "id": 804150,
        "original_language": "en",
        "original_title": "Cocaine Bear",
        "overview": "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
        "popularity": 499.485,
        "poster_path": "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
        "release_date": "2023-02-22",
        "title": "Cocaine Bear",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 1031
    },
    {
        "adult": false,
        "backdrop_path": "/cZzZlwGvxiByXam0lZ57J9IN233.jpg",
        "genre_ids": [
            27
        ],
        "id": 1008005,
        "original_language": "es",
        "original_title": "La niña de la comunión",
        "overview": "Spain, late 1980s. Newcomer Sara tries to fit in with the other teens in this tight-knit small town in the province of Tarragona. If only she were more like her extroverted best friend, Rebe. They go out one night at a nightclub, on the way home, they come upon a little girl holding a doll, dressed for her first communion. And that's when the nightmare begins.",
        "popularity": 443.041,
        "poster_path": "/uYxrWr9o44yO0HvVfFFHGu01gfX.jpg",
        "release_date": "2023-02-10",
        "title": "The Communion Girl",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 100
    },
    {
        "adult": false,
        "backdrop_path": "/tFaC1Fb1sv1dALB0i9Avi76MHmn.jpg",
        "genre_ids": [
            10751,
            28,
            12
        ],
        "id": 946310,
        "original_language": "nl",
        "original_title": "De Piraten van Hiernaast II: De Ninja's van de Overkant",
        "overview": "The pirates feel right at home in Sandborough, but the atmosphere cools right down when the ninjas come to live in the street. After all, pirates and ninjas are sworn enemies!  While pirate captain Hector Blunderbuss struggles to get rid of his new neighbours, son Billy and ninja daughter Yuka become friends. The pirates challenge the ninjas to the ultimate battle at the village's annual hexathlon. Who will win the match? Ninjas are faster and more agile of course, but pirates are the best cheats in all of the seven seas...",
        "popularity": 380.564,
        "poster_path": "/uDsvma9dAwnDPVuCFi99YpWvBk0.jpg",
        "release_date": "2022-04-20",
        "title": "Pirates Down the Street II: The Ninjas from Across",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 90
    },
    {
        "adult": false,
        "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        "genre_ids": [
            28,
            12,
            878,
            14
        ],
        "id": 436270,
        "original_language": "en",
        "original_title": "Black Adam",
        "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        "popularity": 453.977,
        "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        "release_date": "2022-10-19",
        "title": "Black Adam",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 4884
    },
    {
        "adult": false,
        "backdrop_path": "/qElNES0sHVQcbzvGrTx7ccpGzij.jpg",
        "genre_ids": [
            878,
            28,
            18
        ],
        "id": 842675,
        "original_language": "zh",
        "original_title": "流浪地球2",
        "overview": "A prequel to The Wandering Earth.",
        "popularity": 720.6,
        "poster_path": "/pR858ihc6Ls9xohpdRJVjV787ml.jpg",
        "release_date": "2023-01-22",
        "title": "The Wandering Earth II",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 184
    },
    {
        "adult": false,
        "backdrop_path": "/nDmPjKLqLwWyd4Ssti8HCdhW5cZ.jpg",
        "genre_ids": [
            28
        ],
        "id": 1048300,
        "original_language": "en",
        "original_title": "Adrenaline",
        "overview": "A female FBI agent holidaying in Eastern Europe with her family gets her life upside down when her daughter is kidnapped. She has to team up with a criminal on the run to save her daughter before time runs out.",
        "popularity": 454.22,
        "poster_path": "/mSgqZlz7umts77mEhmEhv9piUKv.jpg",
        "release_date": "2022-12-15",
        "title": "Adrenaline",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 42
    },
    {
        "adult": false,
        "backdrop_path": "/c3hl9E8E7b9opXDFVF5tSyk0ykr.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            12,
            14
        ],
        "id": 816904,
        "original_language": "es",
        "original_title": "Momias",
        "overview": "Through a series of unfortunate events, three mummies end up in present-day London and embark on a wacky and hilarious journey in search of an old ring belonging to the Royal Family, stolen by ambitious archaeologist Lord Carnaby.",
        "popularity": 439.814,
        "poster_path": "/qVdrYN8qu7xUtsdEFeGiIVIaYd.jpg",
        "release_date": "2023-01-05",
        "title": "Mummies",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 278
    },
    {
        "adult": false,
        "backdrop_path": "/j9ijjTr4CU1koghXjxoEbCl8Yba.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 44281,
        "original_language": "ar",
        "original_title": "عصفور السطح",
        "overview": "Twelve-year-old Noura dangles uncertainly in that difficult netherworld between childhood and adulthood. His growing libido has gotten him banned from the women's baths, where his mother took him when he was younger, but he's not yet old enough to participate in grown-up discussions with the men of his Tunisian village. Noura's only real friend is a troublemaker named Salih -- the village political outcast.",
        "popularity": 339.778,
        "poster_path": "/14lvkOnU9dfDKp6PE2TFeCCzVU5.jpg",
        "release_date": "1990-09-14",
        "title": "Halfaouine: Boy of the Terraces",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 33
    },
    {
        "adult": false,
        "backdrop_path": "/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 980078,
        "original_language": "en",
        "original_title": "Winnie the Pooh: Blood and Honey",
        "overview": "Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.",
        "popularity": 378.362,
        "poster_path": "/ewF3IlGscc7FjgGEPcQvZsAsgAW.jpg",
        "release_date": "2023-01-27",
        "title": "Winnie the Pooh: Blood and Honey",
        "video": false,
        "vote_average": 5.7,
        "vote_count": 584
    },
    {
        "adult": false,
        "backdrop_path": "/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
        "genre_ids": [
            28,
            10752
        ],
        "id": 840326,
        "original_language": "fi",
        "original_title": "Sisu",
        "overview": "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
        "popularity": 489.791,
        "poster_path": "/pnQYjDxqZ3C6reI8N0MfNi4NMkZ.jpg",
        "release_date": "2023-01-27",
        "title": "Sisu",
        "video": false,
        "vote_average": 7,
        "vote_count": 69
    },
    {
        "adult": false,
        "backdrop_path": "/f0nRX5F6VjzXMMzezZn48EQwjUn.jpg",
        "genre_ids": [
            16
        ],
        "id": 579884,
        "original_language": "ru",
        "original_title": "Суворов: Великое путешествие",
        "overview": "Sixteen-year-old servant Greg is in love with Sophia, the daughter of a wealthy merchant. The feeling is mutual but Sophia’s parents want her to marry another - a man of high social standing and low moral values. Greg is forcibly separated from his beloved and made to join General Alexander Suvorov’s army. During the legendary Swiss expedition, Greg earns the respect and loyalty of Suvorov and his men by thwarting a treacherous enemy plot, proving that anyone can be a hero if they are driven by love.",
        "popularity": 435.95,
        "poster_path": "/geZLtEgfuK7HMH9WcG2VuWtf9Gi.jpg",
        "release_date": "2022-05-01",
        "title": "The Swiss Adventure",
        "video": false,
        "vote_average": 4.6,
        "vote_count": 5
    },
    {
        "adult": false,
        "backdrop_path": "/aityu1Gma509jInlspHstEt8Jg0.jpg",
        "genre_ids": [
            12,
            14,
            10751
        ],
        "id": 736790,
        "original_language": "en",
        "original_title": "Chupa",
        "overview": "While visiting family in Mexico, a lonely boy befriends a mythical creature hiding on his grandfather's ranch and embarks on the adventure of a lifetime.",
        "popularity": 412.83,
        "poster_path": "/ra3xm8KFAkwK0CdbPRkfYADJYTB.jpg",
        "release_date": "2023-04-07",
        "title": "Chupa",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 220
    },
    {
        "adult": false,
        "backdrop_path": "/vgzHkWaj7HLCjizRzyO1Y0uE7e2.jpg",
        "genre_ids": [
            16,
            28,
            14
        ],
        "id": 997776,
        "original_language": "en",
        "original_title": "Justice League x RWBY: Super Heroes & Huntsmen, Part One",
        "overview": "Superman, Batman, Wonder Woman, Flash, Cyborg, Green Lantern and Vixen are transported to the strange world of Remnant and find themselves turned into teenagers. Meanwhile, Remnant heroes Ruby, Weiss, Blake and Yang must combine forces with the Justice League to uncover why their planet has been mysteriously altered before a superpowered Grimm destroys everything.",
        "popularity": 406.658,
        "poster_path": "/sjBFnG8DpouuWi161KbjbAER235.jpg",
        "release_date": "2023-04-25",
        "title": "Justice League x RWBY: Super Heroes & Huntsmen, Part One",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 52
    },
    {
        "adult": false,
        "backdrop_path": "/eNJhWy7xFzR74SYaSJHqJZuroDm.jpg",
        "genre_ids": [
            28,
            878
        ],
        "id": 1033219,
        "original_language": "en",
        "original_title": "Attack on Titan",
        "overview": "As viable water is depleted on Earth, a mission is sent to Saturn's moon Titan to retrieve sustainable H2O reserves from its alien inhabitants. But just as the humans acquire the precious resource, they are attacked by Titan rebels, who don't trust that the Earthlings will leave in peace.",
        "popularity": 357.794,
        "poster_path": "/qNz4l8UgTkD8rlqiKZ556pCJ9iO.jpg",
        "release_date": "2022-09-30",
        "title": "Attack on Titan",
        "video": false,
        "vote_average": 6,
        "vote_count": 128
    },
    {
        "adult": false,
        "backdrop_path": "/rPSJAElGxOTko1zK6uIlYnTMFxN.jpg",
        "genre_ids": [
            80
        ],
        "id": 1104040,
        "original_language": "en",
        "original_title": "Gangs of Lagos",
        "overview": "A group of friends who each have to navigate their own destiny, growing up on the bustling streets and neighborhood of Isale Eko, Lagos.",
        "popularity": 334.581,
        "poster_path": "/nGwFsB6EXUCr21wzPgtP5juZPSv.jpg",
        "release_date": "2023-04-07",
        "title": "Gangs of Lagos",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 38
    },
    {
        "adult": false,
        "backdrop_path": "/5qlmAFORL49yTOPxhwBWABW2zm0.jpg",
        "genre_ids": [
            27
        ],
        "id": 1105014,
        "original_language": "en",
        "original_title": "Ripper's Revenge",
        "overview": "One year on from the notorious Ripper murders, London is terrorised once again by a series of brutal killings. When gruesome letters from the Ripper begin landing on his desk, an innocent reporter finds himself drawn into a deadly mystery, threatening the lives of everyone around him.",
        "popularity": 361.954,
        "poster_path": "/cuEIBHTWAvaYkhhS8HfOkhce2MB.jpg",
        "release_date": "2023-04-03",
        "title": "Ripper's Revenge",
        "video": false,
        "vote_average": 6,
        "vote_count": 17
    },
    {
        "adult": false,
        "backdrop_path": "/7cra09dpSPto2jGZlK7OMbeO90O.jpg",
        "genre_ids": [
            10749
        ],
        "id": 654374,
        "original_language": "ko",
        "original_title": "막내 처제",
        "overview": "One day, her family gathers for an offering and they worry that she's the only one without a boyfriend. Her brother-in-law, Ho-seok, sets her up on a blind date with his colleague, Min-soo, who has always been nice to him. The more she talks to Min-soo, the more Seo-ri realizes she is interested in her brother-in-law, Ho-seok. She then tries to meet up with him frequently.",
        "popularity": 586.636,
        "poster_path": "/hC9yqXygRNVDz2B9NfZocqmhczM.jpg",
        "release_date": "2019-12-08",
        "title": "The Youngest Sister-in-law",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/lzbrMjEnH34DzTfllRb6XxhlaZu.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 81774,
        "original_language": "fr",
        "original_title": "Les Exploits d'un jeune Don Juan",
        "overview": "It's 1914.  Sixteen-year-old Roger returns home to spend his summer vacation.  His initial efforts are unsuccessful, but World War I breaks out and men are seen marching off to battle. Roger goes overboard when he is presented with several amorous opportunities.",
        "popularity": 327.504,
        "poster_path": "/xvtRgQIRegLjsjaIkKQbh0hk3Qy.jpg",
        "release_date": "1986-11-04",
        "title": "Exploits of a Young Don Juan",
        "video": false,
        "vote_average": 5.7,
        "vote_count": 136
    },
    {
        "adult": false,
        "backdrop_path": "/bPlmTl2rrnzgRKinLvs4GUd0DPb.jpg",
        "genre_ids": [
            35
        ],
        "id": 1118721,
        "original_language": "es",
        "original_title": "Quiero Tu Vida",
        "overview": "A former pro football player must retire after a life-altering injury, and as the years passes he wishes to know how his life would've turned out had he remained a star.",
        "popularity": 359.211,
        "poster_path": "/hk2kW6uwTEa8cxDeF1UPfIpEYkF.jpg",
        "release_date": "2023-05-03",
        "title": "Quiero Tu Vida",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 21
    },
    {
        "adult": false,
        "backdrop_path": "/xmcPahH2mOkDAsIifOKoCacKhrw.jpg",
        "genre_ids": [
            28
        ],
        "id": 842945,
        "original_language": "en",
        "original_title": "Supercell",
        "overview": "Good-hearted teenager William always lived in hope of following in his late father’s footsteps and becoming a storm chaser. His father’s legacy has now been turned into a storm-chasing tourist business, managed by the greedy and reckless Zane Rogers, who is now using William as the main attraction to lead a group of unsuspecting adventurers deep into the eye of the most dangerous supercell ever seen.",
        "popularity": 320.745,
        "poster_path": "/gbGHezV6yrhua0KfAgwrknSOiIY.jpg",
        "release_date": "2023-03-17",
        "title": "Supercell",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 152
    },
    {
        "adult": false,
        "backdrop_path": "/i1eghEBiC0gN4KnwuUGC2fNiX1f.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 552688,
        "original_language": "en",
        "original_title": "The Mother",
        "overview": "A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.",
        "popularity": 389.252,
        "poster_path": "/vnRthEZz16Q9VWcP5homkHxyHoy.jpg",
        "release_date": "2023-05-04",
        "title": "The Mother",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 304
    },
    {
        "adult": false,
        "backdrop_path": "/sp7MPK2K60LLd7A6zjHKsfgjFil.jpg",
        "genre_ids": [
            27,
            14,
            878,
            53
        ],
        "id": 296271,
        "original_language": "en",
        "original_title": "The Devil Conspiracy",
        "overview": "The hottest biotech company in the world has discovered they can clone history’s most influential people from the dead. Now, they are auctioning clones of Michelangelo, Galileo, Vivaldi, and others for tens of millions of dollars to the world’s ultra-rich. But when they steal the Shroud of Turin and clone the DNA of Jesus Christ, all hell breaks loose.",
        "popularity": 313.103,
        "poster_path": "/2lUYbD2C3XSuwqMUbDVDQuz9mqz.jpg",
        "release_date": "2023-01-13",
        "title": "The Devil Conspiracy",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 156
    },
    {
        "adult": false,
        "backdrop_path": "/1PRWW60yQparK1I8Soyy9Evf7Dv.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            18,
            12
        ],
        "id": 869626,
        "original_language": "en",
        "original_title": "Marcel the Shell with Shoes On",
        "overview": "Marcel is an adorable one-inch-tall shell who ekes out a colorful existence with his grandmother Connie and their pet lint, Alan. Once part of a sprawling community of shells, they now live alone as the sole survivors of a mysterious tragedy. But when a documentary filmmaker discovers them amongst the clutter of his Airbnb, the short film he posts online brings Marcel millions of passionate fans, as well as unprecedented dangers and a new hope at finding his long-lost family.",
        "popularity": 307.929,
        "poster_path": "/jaYmP4Ct8YLnxWAW2oYkUjeXtzm.jpg",
        "release_date": "2022-06-24",
        "title": "Marcel the Shell with Shoes On",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 269
    },
    {
        "adult": false,
        "backdrop_path": "/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg",
        "genre_ids": [
            878,
            27,
            35
        ],
        "id": 536554,
        "original_language": "en",
        "original_title": "M3GAN",
        "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
        "popularity": 304.081,
        "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
        "release_date": "2022-12-28",
        "title": "M3GAN",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 2593
    },
    {
        "adult": false,
        "backdrop_path": "/hJoMSAltRx5xvlAXvKyDdugjucJ.jpg",
        "genre_ids": [
            12,
            10751,
            14,
            10749
        ],
        "id": 447277,
        "original_language": "en",
        "original_title": "The Little Mermaid",
        "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
        "popularity": 377.757,
        "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
        "release_date": "2023-05-18",
        "title": "The Little Mermaid",
        "video": false,
        "vote_average": 5.2,
        "vote_count": 14
    },
    {
        "adult": false,
        "backdrop_path": "/6UQZkEA9WIj73LChP4wdPP9xHo6.jpg",
        "genre_ids": [
            18
        ],
        "id": 747355,
        "original_language": "ko",
        "original_title": "스와핑: 두 부부의 이혼여행",
        "overview": "Yong-ho and Seong-ho decide to organize their marriage and leave the last memories. He decides to go on a trip to the sea where four people went together at the beginning of the wedding. In fact, they liked each other's opponents. In the open sea, each person begins to exude their hidden emotions...​",
        "popularity": 344.318,
        "poster_path": "/wESfP4ZeBbwjjFw2tql4Bqx101Q.jpg",
        "release_date": "2020-08-28",
        "title": "Swapping: A Divorce Trip Between Two Couples",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 2
    },
    {
        "adult": false,
        "backdrop_path": "/aHcWyh0n4YbBy9gxYCDlgsNVS3M.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 631842,
        "original_language": "en",
        "original_title": "Knock at the Cabin",
        "overview": "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
        "popularity": 293.98,
        "poster_path": "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
        "release_date": "2023-02-01",
        "title": "Knock at the Cabin",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 1444
    },
    {
        "adult": false,
        "backdrop_path": "/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg",
        "genre_ids": [
            28,
            12,
            53
        ],
        "id": 646389,
        "original_language": "en",
        "original_title": "Plane",
        "overview": "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
        "popularity": 313.462,
        "poster_path": "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
        "release_date": "2023-01-12",
        "title": "Plane",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 1196
    },
    {
        "adult": false,
        "backdrop_path": "/9j7EPYAaS2Pa3bry7Yrkq64ToLf.jpg",
        "genre_ids": [
            878,
            53,
            18
        ],
        "id": 983282,
        "original_language": "en",
        "original_title": "The Artifice Girl",
        "overview": "A team of special agents discovers a revolutionary new computer program to bait and trap online predators. After teaming up with the program's troubled developer, they soon find that the AI is rapidly advancing beyond its original purpose.",
        "popularity": 276.074,
        "poster_path": "/A3qrVjsBd4IZ3QWHMs2x1dwRxuX.jpg",
        "release_date": "2023-04-27",
        "title": "The Artifice Girl",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 42
    },
    {
        "adult": false,
        "backdrop_path": "/tYcmm8XtzRdcT6kliCbHuWwLCwB.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 849869,
        "original_language": "ko",
        "original_title": "길복순",
        "overview": "At work, she's a renowned assassin. At home, she's a single mom to a teenage daughter. Killing? That's easy. It's parenting that's the hard part.",
        "popularity": 307.506,
        "poster_path": "/taYgn3RRpCGlTGdaGQvnSIOzXFy.jpg",
        "release_date": "2023-02-17",
        "title": "Kill Boksoon",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 243
    },
    {
        "adult": false,
        "backdrop_path": "/ryQbb26wl1ggtypXiZW0kjKZCrP.jpg",
        "genre_ids": [
            18,
            12,
            10749,
            28,
            36
        ],
        "id": 67308,
        "original_language": "cn",
        "original_title": "3D肉蒲團之極樂寶鑑",
        "overview": "Loosely based on a 17th century erotic Chinese story named The Carnal Prayer Mat, the story follows a young scholar named Yangsheng who gets married to the beautiful daughter of a local merchant. When their sex life proves unsatisfactory, Yangsheng leaves home and journeys to the Pavilion of Ultimate Bliss.",
        "popularity": 349.702,
        "poster_path": "/mmvFokJgpFmNt522Hfpq3Zfs2Ra.jpg",
        "release_date": "2011-04-14",
        "title": "3-D Sex and Zen: Extreme Ecstasy",
        "video": false,
        "vote_average": 4.8,
        "vote_count": 90
    },
    {
        "adult": false,
        "backdrop_path": "/2Eewgp7o5AU1xCataDmiIL2nYxd.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 943822,
        "original_language": "en",
        "original_title": "Prizefighter: The Life of Jem Belcher",
        "overview": "At the turn of the 19th century, Pugilism was the sport of kings and a gifted young boxer fought his way to becoming champion of England.",
        "popularity": 282.613,
        "poster_path": "/x3PIk93PTbxT88ohfeb26L1VpZw.jpg",
        "release_date": "2022-06-30",
        "title": "Prizefighter: The Life of Jem Belcher",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 126
    },
    {
        "adult": false,
        "backdrop_path": "/69HgAYpbJ04w6lUUVainsYxLabb.jpg",
        "genre_ids": [
            14,
            28,
            12
        ],
        "id": 455476,
        "original_language": "en",
        "original_title": "Knights of the Zodiac",
        "overview": "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
        "popularity": 313.466,
        "poster_path": "/1nbFEdIFprRNSWcCM0RUjQqZifF.jpg",
        "release_date": "2023-04-27",
        "title": "Knights of the Zodiac",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 42
    },
    {
        "adult": false,
        "backdrop_path": "/g03h9TULzJZOoXA34Abp5LE7lvt.jpg",
        "genre_ids": [
            16,
            14,
            12
        ],
        "id": 876792,
        "original_language": "ja",
        "original_title": "劇場版 転生したらスライムだった件 紅蓮の絆編",
        "overview": "A long-running conspiracy is swirling over a mysterious power wielded by the Queen in Raja, a small country west of Tempest. When a slime who evolved into a Demon Lord named Rimuru Tempest crosses paths with Hiiro, a survivor of the Ogre race, an incredible adventure packed with new characters begins. The power of bonds will be put to the test!",
        "popularity": 316.069,
        "poster_path": "/xITip9n9uMAUA0TU6niMXU2tbh0.jpg",
        "release_date": "2022-11-25",
        "title": "That Time I Got Reincarnated as a Slime the Movie: Scarlet Bond",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 198
    },
    {
        "adult": false,
        "backdrop_path": "/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg",
        "genre_ids": [
            28,
            35,
            10749
        ],
        "id": 758009,
        "original_language": "en",
        "original_title": "Shotgun Wedding",
        "overview": "Darcy and Tom gather their families for the ultimate destination wedding but when the entire party is taken hostage, “’Til Death Do Us Part” takes on a whole new meaning in this hilarious, adrenaline-fueled adventure as Darcy and Tom must save their loved ones—if they don’t kill each other first.",
        "popularity": 288.585,
        "poster_path": "/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg",
        "release_date": "2022-12-28",
        "title": "Shotgun Wedding",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 817
    },
    {
        "adult": false,
        "backdrop_path": "/ql4PnvKYKaMtdx9Ck4fHY2wJphT.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 32516,
        "original_language": "cn",
        "original_title": "金瓶梅2 愛的奴隸",
        "overview": "Rich and powerful Simon Qing has been schooled in the ways of sex by his virile father, but is still a virgin. That is, until he meets his first love Violetta who has fun with him all over his father’s estate. Their love does not last, so Simon embarks on a journey. Along the way he meets the comely nun Moon whom Simon deflowers and then marries. He then becomes enamored of Golden Lotus but she is married to dwarf Wu Da-Lang.",
        "popularity": 438.251,
        "poster_path": "/A1yymig7S0FTWv9cTtOwdI1cH5V.jpg",
        "release_date": "2009-03-04",
        "title": "The Forbidden Legend: Sex & Chopsticks 2",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 79
    },
    {
        "adult": false,
        "backdrop_path": "/nJbWAc8wakV3BncyF4643SyFWPr.jpg",
        "genre_ids": [
            35,
            878,
            12
        ],
        "id": 774752,
        "original_language": "en",
        "original_title": "The Guardians of the Galaxy Holiday Special",
        "overview": "On a mission to make Christmas unforgettable for Quill, the Guardians head to Earth in search of the perfect present.",
        "popularity": 265.274,
        "poster_path": "/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg",
        "release_date": "2022-11-25",
        "title": "The Guardians of the Galaxy Holiday Special",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 1361
    },
    {
        "adult": false,
        "backdrop_path": "/uLtVbjvS1O7gXL8lUOwsFOH4man.jpg",
        "genre_ids": [
            28,
            878,
            12
        ],
        "id": 118340,
        "original_language": "en",
        "original_title": "Guardians of the Galaxy",
        "overview": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
        "popularity": 253.932,
        "poster_path": "/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
        "release_date": "2014-07-30",
        "title": "Guardians of the Galaxy",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 25955
    },
    {
        "adult": false,
        "backdrop_path": "/u5nY7pY2Y58o7dSM9cy6NclOV8V.jpg",
        "genre_ids": [
            27
        ],
        "id": 1023313,
        "original_language": "es",
        "original_title": "La Exorcista",
        "overview": "Ophelia, a young nun recently arriving in the town of San Ramon, is forced to perform an exorcism on a pregnant woman in danger of dying. Just when she thinks her possession has ended, she discovers that the evil presence hasn't disappeared yet. The director of the award-winning Here Comes the Devil and Late Phases adds a new twist to possession movies in one of this year's Latin American horror surprises.",
        "popularity": 244.199,
        "poster_path": "/d07xtqwq1uriQ1hda6qeu8Skt5m.jpg",
        "release_date": "2022-11-02",
        "title": "The Exorcist",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 80
    },
    {
        "adult": false,
        "backdrop_path": "/70aVSo3fuZ94jyQ3rT64afEf8lV.jpg",
        "genre_ids": [
            16,
            12,
            35,
            10751,
            14
        ],
        "id": 676710,
        "original_language": "en",
        "original_title": "The Amazing Maurice",
        "overview": "Maurice is a streetwise ginger cat who comes up with a money-making scam by befriending a group of self-taught talking rats. When Maurice and the rodents meet a bookworm called Malicia, their little con soon goes down the drain.",
        "popularity": 249.974,
        "poster_path": "/ydhZeUjbzVEFclUpMhLfDZSavUY.jpg",
        "release_date": "2022-12-16",
        "title": "The Amazing Maurice",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 77
    },
    {
        "adult": false,
        "backdrop_path": "/ynpefecsZumBA37vXXaBHK3giln.jpg",
        "genre_ids": [
            16,
            10751,
            878,
            14
        ],
        "id": 265712,
        "original_language": "ja",
        "original_title": "STAND BY ME ドラえもん",
        "overview": "Sewashi and Doraemon find themselves way back in time and meet Nobita. It is up to Doraemon to take care of Nobita or else he will not return to the present.",
        "popularity": 248.46,
        "poster_path": "/wc7XQbfx6EIQqCuvmBMt3aisb2Y.jpg",
        "release_date": "2014-08-08",
        "title": "Stand by Me Doraemon",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 424
    },
    {
        "adult": false,
        "backdrop_path": "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 634649,
        "original_language": "en",
        "original_title": "Spider-Man: No Way Home",
        "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        "popularity": 246.603,
        "poster_path": "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
        "release_date": "2021-12-15",
        "title": "Spider-Man: No Way Home",
        "video": false,
        "vote_average": 8,
        "vote_count": 17346
    },
    {
        "adult": false,
        "backdrop_path": "/AsEgGeccI32SwMBkxpwhOkhbzmF.jpg",
        "genre_ids": [
            28,
            878,
            53,
            27
        ],
        "id": 1011679,
        "original_language": "en",
        "original_title": "Shark Side of the Moon",
        "overview": "Decades ago, the USSR developed unkillable sharks and launched them to the moon. Today, a team of American astronauts will endure the fight of their lives.",
        "popularity": 245.573,
        "poster_path": "/v5CfpzxoJDkZxjZAizClFdlEF0U.jpg",
        "release_date": "2022-08-12",
        "title": "Shark Side of the Moon",
        "video": false,
        "vote_average": 5.3,
        "vote_count": 124
    },
    {
        "adult": false,
        "backdrop_path": "/cevmHkKqSlrTYqpJ5eaAjml1jec.jpg",
        "genre_ids": [
            28,
            18,
            27,
            878,
            53
        ],
        "id": 1084225,
        "original_language": "en",
        "original_title": "The Park",
        "overview": "A dystopian coming-of-age movie focused on three kids who find themselves in an abandoned amusement park, aiming to unite whoever remains. With dangers lurking around every corner, they will do whatever it takes to survive their hellish Neverland.",
        "popularity": 217.443,
        "poster_path": "/hR1jdCw0A9czgsbp45TASkjjBhA.jpg",
        "release_date": "2023-03-02",
        "title": "The Park",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 42
    },
    {
        "adult": false,
        "backdrop_path": "/hlxduUs8y9icWGMzYCDLcYHEQ2u.jpg",
        "genre_ids": [
            53
        ],
        "id": 985939,
        "original_language": "en",
        "original_title": "Fall",
        "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
        "popularity": 228.477,
        "poster_path": "/v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
        "release_date": "2022-08-11",
        "title": "Fall",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 2855
    },
    {
        "adult": false,
        "backdrop_path": "/bKWFetR4injOJXOGHeLuTD7wHI4.jpg",
        "genre_ids": [
            27,
            53,
            14
        ],
        "id": 994128,
        "original_language": "es",
        "original_title": "Viejos",
        "overview": "An octogenarian named Manuel falls into a state of dementia after the sudden suicide of his wife, sparking a series of paranormal events that will put his family’s lives at risk.",
        "popularity": 290.547,
        "poster_path": "/88f35mGJOIE1nXgst5o4FvEDVzr.jpg",
        "release_date": "2023-04-21",
        "title": "The Elderly",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 14
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 730629,
        "original_language": "en",
        "original_title": "John Wick: Chapter 5",
        "overview": "The fifth installment in the John Wick franchise, confirmed to be in development.",
        "popularity": 253.878,
        "poster_path": "/A1Z4TjH3xqu4rHwAgLM3LX89luC.jpg",
        "title": "John Wick: Chapter 5",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/8NEvnVKeGMLEXG45MMNqxJLcM4y.jpg",
        "genre_ids": [
            28,
            16,
            14
        ],
        "id": 820232,
        "original_language": "ja",
        "original_title": "鬼滅の刃 兄妹の絆",
        "overview": "Tanjiro finds his family slaughtered and the lone survivor, his sister Nezuko Kamado, turned into a Demon. To his surprise, however, Nezuko still shows signs of human emotion and thought. Thus begins Tanjiro's journey to seek out the Demon who killed their family and turn his sister human again. A recap film of Kimetsu no Yaiba, covering episodes 1-5 with extra footage.",
        "popularity": 227.832,
        "poster_path": "/vJUDoYNNKvBqbEPUskgvzPXGEFz.jpg",
        "release_date": "2019-03-29",
        "title": "Demon Slayer: Kimetsu no Yaiba Sibling's Bond",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 125
    },
    {
        "adult": false,
        "backdrop_path": "/aVPR4EScBkSgznEy0TixQk8z4Ny.jpg",
        "genre_ids": [
            53,
            9648,
            18,
            27
        ],
        "id": 1114905,
        "original_language": "es",
        "original_title": "Uno para morir",
        "overview": "Seven strangers wake up in a mansion in the middle of nowhere to discover they are part of a twisted game. They will have 60 minutes to choose one person to die; otherwise, all of them will be murdered. As the clock ticks down, the most lurid secrets will come to light, and they’ll discover they are all connected by a dark past.",
        "popularity": 280.583,
        "poster_path": "/yMeKoe3ui4Pad8FUOJwCby3SOWe.jpg",
        "release_date": "2023-05-05",
        "title": "Death's Roulette",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 75
    },
    {
        "adult": false,
        "backdrop_path": "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
        "genre_ids": [
            14,
            28,
            35
        ],
        "id": 616037,
        "original_language": "en",
        "original_title": "Thor: Love and Thunder",
        "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
        "popularity": 238.902,
        "poster_path": "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
        "release_date": "2022-07-06",
        "title": "Thor: Love and Thunder",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 5939
    },
    {
        "adult": false,
        "backdrop_path": "/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
        "genre_ids": [
            16,
            28,
            12,
            14,
            53
        ],
        "id": 635302,
        "original_language": "ja",
        "original_title": "劇場版「鬼滅の刃」無限列車編",
        "overview": "Tanjiro Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyojuro Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
        "popularity": 213.649,
        "poster_path": "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
        "release_date": "2020-10-16",
        "title": "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 3123
    },
    {
        "adult": false,
        "backdrop_path": "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
        "genre_ids": [
            28,
            18
        ],
        "id": 361743,
        "original_language": "en",
        "original_title": "Top Gun: Maverick",
        "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
        "popularity": 222.309,
        "poster_path": "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        "release_date": "2022-05-24",
        "title": "Top Gun: Maverick",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 6808
    },
    {
        "adult": false,
        "backdrop_path": "/7eccX0xay9pDj6ZQvU4cu3whw18.jpg",
        "genre_ids": [
            16,
            14,
            27,
            28,
            9648
        ],
        "id": 1003579,
        "original_language": "en",
        "original_title": "Batman: The Doom That Came to Gotham",
        "overview": "Explorer Bruce Wayne accidentally unleashes an ancient evil, and returns to Gotham after being away for two decades. There, Batman battles Lovecraftian supernatural forces and encounters allies and enemies such as Green Arrow, Ra's al Ghul, Mr. Freeze, Killer Croc, Two-Face and James Gordon.",
        "popularity": 235.606,
        "poster_path": "/hrATQE8ScQceohwInaMluluNEaf.jpg",
        "release_date": "2023-03-10",
        "title": "Batman: The Doom That Came to Gotham",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 84
    },
    {
        "adult": false,
        "backdrop_path": "/bWZ4ge00FlDyHcOQZl7AzbZcrxT.jpg",
        "genre_ids": [
            35,
            28
        ],
        "id": 325358,
        "original_language": "en",
        "original_title": "Superfast!",
        "overview": "Undercover cop Lucas White joins Vin Serento's LA gang of illegal street racers. They are fast and they are furious and they plan to double cross LA crime kingpin Juan Carlos de la Sol who hides his cash in a downtown Taco Bell. The gang's outrageous plan is as daring as it is ridiculous and will see them towing the whole restaurant, at crazy speeds.",
        "popularity": 254.131,
        "poster_path": "/iuIWl90qCpoxv6g775JB6Kg0m86.jpg",
        "release_date": "2015-03-05",
        "title": "Superfast!",
        "video": false,
        "vote_average": 5,
        "vote_count": 344
    },
    {
        "adult": false,
        "backdrop_path": "/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
        "genre_ids": [
            28,
            12,
            35
        ],
        "id": 384018,
        "original_language": "en",
        "original_title": "Fast & Furious Presents: Hobbs & Shaw",
        "overview": "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have traded smack talk and body blows. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, they join forces to defeat him.",
        "popularity": 244.166,
        "poster_path": "/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",
        "release_date": "2019-08-01",
        "title": "Fast & Furious Presents: Hobbs & Shaw",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 6329
    },
    {
        "adult": false,
        "backdrop_path": "/gNOyIDGW8YY6AYbz6nMvrVSHSXs.jpg",
        "genre_ids": [
            16,
            12,
            10751,
            14
        ],
        "id": 776835,
        "original_language": "en",
        "original_title": "The Magician's Elephant",
        "overview": "Peter is searching for his long-lost sister when he crosses paths with a fortune teller in the market square. His one one question is: is his sister still alive? The answer, that he must find a mysterious elephant and the magician who will conjure it, sets Peter off on a journey to complete three seemingly impossible tasks that will change the face of his town forever.",
        "popularity": 201.07,
        "poster_path": "/cAoAgzOCxSytYBqqCQulhXNR3LB.jpg",
        "release_date": "2023-03-10",
        "title": "The Magician's Elephant",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 121
    },
    {
        "adult": false,
        "backdrop_path": "/yEQqrW61rwNuVRHTjgHOAU4dXNE.jpg",
        "genre_ids": [
            28,
            12,
            10751,
            35
        ],
        "id": 675353,
        "original_language": "en",
        "original_title": "Sonic the Hedgehog 2",
        "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
        "popularity": 187.726,
        "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
        "release_date": "2022-04-08",
        "title": "Sonic the Hedgehog 2",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 3911
    },
    {
        "adult": false,
        "backdrop_path": "/94kQGMiFbs5MUTlt7kj9dewsMDi.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 676547,
        "original_language": "en",
        "original_title": "Prey for the Devil",
        "overview": "In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.",
        "popularity": 175.844,
        "poster_path": "/iCvgemXf2Kpr2LvpDmt5J9NhjKM.jpg",
        "release_date": "2022-10-23",
        "title": "Prey for the Devil",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 654
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            53
        ],
        "id": 1076605,
        "original_language": "es",
        "original_title": "Cazadora",
        "overview": "In a dystopian future, a mother and her teenage son go hunting in the mountains and encounter a stranger who threatens to upend their relationship.",
        "popularity": 222.028,
        "poster_path": "/8QxCd3pSSrj6QqaG4fkNkaJmUa.jpg",
        "release_date": "2023-01-19",
        "title": "Cazadora",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 20
    },
    {
        "adult": false,
        "backdrop_path": "/Xfn9eDOaZKSz5W3PRoJI928I9c.jpg",
        "genre_ids": [
            28,
            12,
            36,
            18
        ],
        "id": 875104,
        "original_language": "zh",
        "original_title": "叶问宗师觉醒",
        "overview": "When a young Master Ip stops a kidnapping, he ignites a turf war with a ruthless human-trafficking ring. In retaliation, the gang kidnaps one of Ip Man's close friends, forcing him to face the group's brutal boxing champion head-on.",
        "popularity": 220.205,
        "poster_path": "/A7vhdyGrpPMKXsuFBZzxmave94F.jpg",
        "release_date": "2023-05-05",
        "title": "Ip Man: The Awakening",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 7
    },
    {
        "adult": false,
        "backdrop_path": "/nWs0auTqn2UaFGfTKtUE5tlTeBu.jpg",
        "genre_ids": [
            10751,
            35,
            14
        ],
        "id": 668482,
        "original_language": "en",
        "original_title": "Roald Dahl's Matilda the Musical",
        "overview": "An extraordinary young girl discovers her superpower and summons the remarkable courage, against all odds, to help others change their stories, whilst also taking charge of her own destiny. Standing up for what's right, she's met with miraculous results.",
        "popularity": 175.634,
        "poster_path": "/ga8R3OiOMMgSvZ4cOj8x7prUNYZ.jpg",
        "release_date": "2022-11-25",
        "title": "Roald Dahl's Matilda the Musical",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 569
    },
    {
        "adult": false,
        "backdrop_path": "/hT9ZUwLN5tB2O7miBu1oIMJFqJT.jpg",
        "genre_ids": [
            12,
            28,
            878
        ],
        "id": 507086,
        "original_language": "en",
        "original_title": "Jurassic World Dominion",
        "overview": "Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood, while Dr Ellie Sattler investigates a genetically engineered swarm of giant insects.",
        "popularity": 210.34,
        "poster_path": "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
        "release_date": "2022-06-01",
        "title": "Jurassic World Dominion",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 4808
    },
    {
        "adult": false,
        "backdrop_path": "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
        "genre_ids": [
            28,
            12,
            80,
            53
        ],
        "id": 385128,
        "original_language": "en",
        "original_title": "F9",
        "overview": "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
        "popularity": 257.187,
        "poster_path": "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
        "release_date": "2021-05-19",
        "title": "F9",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 6269
    },
    {
        "adult": false,
        "backdrop_path": "/o6PcqdeWMhvDGSkbzgKNfnzd2Js.jpg",
        "genre_ids": [
            27
        ],
        "id": 984105,
        "original_language": "en",
        "original_title": "The Mummy Resurrection",
        "overview": "When an infamous \"cursed\" Egyptian sarcophagus falls into the hands of unscrupulous huckster Everett Randolph, he becomes obsessed with resurrecting the mummified princess held within it.",
        "popularity": 195.166,
        "poster_path": "/d0pt6KlVvmtG0uhccWjgWfIqJee.jpg",
        "release_date": "2023-01-02",
        "title": "The Mummy Resurrection",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 12
    },
    {
        "adult": false,
        "backdrop_path": "/afsYFdid9pnnRd6tTrHFUbHgXJn.jpg",
        "genre_ids": [
            878
        ],
        "id": 843794,
        "original_language": "ko",
        "original_title": "정이",
        "overview": "On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
        "popularity": 196.617,
        "poster_path": "/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",
        "release_date": "2023-01-20",
        "title": "JUNG_E",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 452
    },
    {
        "adult": false,
        "backdrop_path": "/jhi3K0rN46SSu9wEu6zYVCOeVtH.jpg",
        "genre_ids": [
            16,
            28,
            878
        ],
        "id": 1003580,
        "original_language": "en",
        "original_title": "Legion of Super-Heroes",
        "overview": "Kara, devastated by the loss of Krypton, struggles to adjust to her new life on Earth. Her cousin, Superman, mentors her and suggests she leave their space-time to attend the Legion Academy in the 31st century, where she makes new friends and a new enemy: Brainiac 5. Meanwhile, she must contend with a mysterious group called the Dark Circle as it searches for a powerful weapon held in the Academy’s vault.",
        "popularity": 202.47,
        "poster_path": "/8M6bA5t2q5u1nWDTEIXuGDwvboW.jpg",
        "release_date": "2023-02-07",
        "title": "Legion of Super-Heroes",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 88
    },
    {
        "adult": false,
        "backdrop_path": "/tiuAX3lcgGp2ClLonjUQ7HB5sfO.jpg",
        "genre_ids": [
            80
        ],
        "id": 842544,
        "original_language": "en",
        "original_title": "Transfusion",
        "overview": "Ryan Logan, a former Special Forces operative, is battling to cope with life after the loss of his wife.  He is thrusted into the criminal underworld to keep his only son from being taken from him.",
        "popularity": 189.63,
        "poster_path": "/bxh5xCCW9Ynfg6EZJWUkc1zqTnr.jpg",
        "release_date": "2023-01-05",
        "title": "Transfusion",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 165
    },
    {
        "adult": false,
        "backdrop_path": "/tU3mnpFLOAp2Ia6vHvGIw8ewJQb.jpg",
        "genre_ids": [
            10402
        ],
        "id": 1041513,
        "original_language": "en",
        "original_title": "Encanto at the Hollywood Bowl",
        "overview": "A taped performance of the Encanto Live-to-Film Concert Experience at the Hollywood Bowl. The original cast puts on a miracle of a concert as they sing the favorite songs, accompanied by a full orchestra and 50 person ensemble, and the Hollywood Bowl transforms into Casita!",
        "popularity": 178.497,
        "poster_path": "/sa3Ku5yNVjp8NloWxJoI9dQjvOi.jpg",
        "release_date": "2022-12-28",
        "title": "Encanto at the Hollywood Bowl",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 134
    },
    {
        "adult": false,
        "backdrop_path": "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
        "genre_ids": [
            28,
            35,
            14,
            80
        ],
        "id": 1013860,
        "original_language": "en",
        "original_title": "R.I.P.D. 2: Rise of the Damned",
        "overview": "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
        "popularity": 194.364,
        "poster_path": "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
        "release_date": "2022-11-15",
        "title": "R.I.P.D. 2: Rise of the Damned",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 468
    },
    {
        "adult": false,
        "backdrop_path": "/53BC9F2tpZnsGno2cLhzvGprDYS.jpg",
        "genre_ids": [
            14,
            28,
            12,
            53
        ],
        "id": 736526,
        "original_language": "no",
        "original_title": "Troll",
        "overview": "Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?",
        "popularity": 175.286,
        "poster_path": "/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
        "release_date": "2022-12-01",
        "title": "Troll",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 1386
    },
    {
        "adult": false,
        "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
        "genre_ids": [
            12,
            28,
            878
        ],
        "id": 299536,
        "original_language": "en",
        "original_title": "Avengers: Infinity War",
        "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        "popularity": 189.139,
        "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "release_date": "2018-04-25",
        "title": "Avengers: Infinity War",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 26865
    },
    {
        "adult": false,
        "backdrop_path": "/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
        "genre_ids": [
            53,
            28,
            878
        ],
        "id": 766507,
        "original_language": "en",
        "original_title": "Prey",
        "overview": "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
        "popularity": 178.087,
        "poster_path": "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
        "release_date": "2022-08-02",
        "title": "Prey",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 5463
    },
    {
        "adult": false,
        "backdrop_path": "/9EIUIgBYzGra7Xxemgs8JB049si.jpg",
        "genre_ids": [
            35,
            10749
        ],
        "id": 676841,
        "original_language": "es",
        "original_title": "Infelices para Siempre",
        "overview": "María José and Alfredo are about to celebrate their 20th anniversary and their children give them a trip to the hotel where they celebrated their honeymoon, but a spell will make them repeat the same day.",
        "popularity": 174.788,
        "poster_path": "/qiAM7Y8xF8wJDDsjeSuLgzyFGmd.jpg",
        "release_date": "2023-01-26",
        "title": "Unhappily Ever After",
        "video": false,
        "vote_average": 7,
        "vote_count": 136
    },
    {
        "adult": false,
        "backdrop_path": "/iKUwhA4DUxMcNKu5lLSbDFwwilk.jpg",
        "genre_ids": [
            14,
            28,
            12
        ],
        "id": 453395,
        "original_language": "en",
        "original_title": "Doctor Strange in the Multiverse of Madness",
        "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
        "popularity": 190.334,
        "poster_path": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
        "release_date": "2022-05-04",
        "title": "Doctor Strange in the Multiverse of Madness",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 7414
    },
    {
        "adult": false,
        "backdrop_path": "/sRfX2XPjyL7nRKVRKXVG6D0bVQI.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 884184,
        "original_language": "en",
        "original_title": "Consecration",
        "overview": "After the alleged suicide of her priest brother, Grace travels to the remote Scottish convent where he fell to his death. Distrusting the Church's account, she uncovers murder, sacrilege and a disturbing truth about herself.",
        "popularity": 164.763,
        "poster_path": "/yQTRmPzKAdLodknnPVtImm6FWPZ.jpg",
        "release_date": "2023-02-09",
        "title": "Consecration",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 38
    },
    {
        "adult": false,
        "backdrop_path": "/rH3jY9JN9krUyE0Q3WLNtujMs8.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 667538,
        "original_language": "en",
        "original_title": "Transformers: Rise of the Beasts",
        "overview": "In the year 1994, a pair of archaeologists from Brooklyn come into an ancient conflict through a globe-trotting adventure with the Autobots that ties in with three factions of the Transformers race: the Maximals, the Predacons and the Terrorcons. Which then later signals the arrival of the coming darkness in the form of Unicron.",
        "popularity": 216.153,
        "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
        "release_date": "2023-06-07",
        "title": "Transformers: Rise of the Beasts",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/sKvQUSyqsFq8e1ts6oo3Xp3dPH2.jpg",
        "genre_ids": [
            16,
            12,
            35,
            14
        ],
        "id": 585511,
        "original_language": "en",
        "original_title": "Luck",
        "overview": "Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.",
        "popularity": 165.643,
        "poster_path": "/1HOYvwGFioUFL58UVvDRG6beEDm.jpg",
        "release_date": "2022-08-05",
        "title": "Luck",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1265
    },
    {
        "adult": false,
        "backdrop_path": "/2iNUodSKykQ4VtvtG280ntNy7hB.jpg",
        "genre_ids": [
            28,
            878,
            27
        ],
        "id": 615656,
        "original_language": "en",
        "original_title": "Meg 2: The Trench",
        "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
        "popularity": 151.16,
        "poster_path": "/uvYbo4eF3q6W06kpx5iDwC4jt6N.jpg",
        "release_date": "2023-08-02",
        "title": "Meg 2: The Trench",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/pxJbfnMIQQxCrdeLD0zQnWr6ouL.jpg",
        "genre_ids": [
            28,
            35,
            53
        ],
        "id": 1077280,
        "original_language": "en",
        "original_title": "Die Hart",
        "overview": "Kevin Hart - playing a version of himself - is on a death-defying quest to become an action star. And with a little help from John Travolta, Nathalie Emmanuel, and Josh Hartnett - he just might pull it off.",
        "popularity": 175.552,
        "poster_path": "/1EnBjTJ5utgT1OXYBZ8YwByRCzP.jpg",
        "release_date": "2023-02-22",
        "title": "Die Hart",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 284
    },
    {
        "adult": false,
        "backdrop_path": "/m0mLjT3TkTXYU2e1XP3wmYDlIml.jpg",
        "genre_ids": [
            10749,
            35
        ],
        "id": 873256,
        "original_language": "pl",
        "original_title": "Gorzko, gorzko!",
        "overview": "Convinced he can charm any woman, a tenacious flirt sets his sights on a headstrong bride-to-be engaged to the son of an ambitious politician.",
        "popularity": 178.329,
        "poster_path": "/kqltY4yywn4ex1Cht6f4lercrW4.jpg",
        "release_date": "2023-04-26",
        "title": "Kiss, Kiss!",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 18
    },
    {
        "adult": false,
        "backdrop_path": "/jBIMZ0AlUYuFNsKbd4L6FojWMoy.jpg",
        "genre_ids": [
            16,
            35,
            10749
        ],
        "id": 820067,
        "original_language": "ja",
        "original_title": "映画 五等分の花嫁",
        "overview": "When five lovely young girls who hate studying hire part-time tutor Futaro, he guides not only their education but also their hearts. Time spent has brought them all closer, with feelings growing within the girls and Futaro. As they finish their third year of high school and their last school festival approaches, they set their sights on what’s next. Is there a future with one of them and Futaro?",
        "popularity": 178.589,
        "poster_path": "/sg7klpt1xwK1IJirBI9EHaqQwJ5.jpg",
        "release_date": "2022-05-20",
        "title": "The Quintessential Quintuplets Movie",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 283
    },
    {
        "adult": false,
        "backdrop_path": "/wyJQgqerZ0LuDjqcrbugYwzLcLC.jpg",
        "genre_ids": [
            16,
            10749,
            878
        ],
        "id": 874745,
        "original_language": "ja",
        "original_title": "君を愛したひとりの僕へ",
        "overview": "Koyomi Hidaka and Shiori Sato meet at his father’s research center and begin to fall in love, but so do their parents, who eventually marry. To avoid becoming stepsiblings, they decide to run away to a parallel universe. Traveling between dimensions is common in their world, but not without repercussions. Does a universe exist for the young couple, and what will it cost them to find it?",
        "popularity": 171.626,
        "poster_path": "/gt7kD8MjObtgQYH130pZiLTN0qx.jpg",
        "release_date": "2022-10-07",
        "title": "To Me, the One Who Loved You",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 36
    },
    {
        "adult": false,
        "backdrop_path": "/v2LilmCylr3bL9TCZSj6syjowZh.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 937278,
        "original_language": "en",
        "original_title": "A Man Called Otto",
        "overview": "When a lively young family moves in next door, grumpy widower Otto Anderson meets his match in a quick-witted, pregnant woman named Marisol, leading to an unlikely friendship that turns his world upside down.",
        "popularity": 171.18,
        "poster_path": "/130H1gap9lFfiTF9iDrqNIkFvC9.jpg",
        "release_date": "2022-12-28",
        "title": "A Man Called Otto",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1194
    },
    {
        "adult": false,
        "backdrop_path": "/ee7nLU6c9JPzxRIqR5qxDXEo3uh.jpg",
        "genre_ids": [
            53,
            27,
            9648
        ],
        "id": 1072074,
        "original_language": "en",
        "original_title": "Disquiet",
        "overview": "After a near-fatal car accident, Sam wakes to discover he is trapped in an abandoned hospital by mysterious and sinister forces that have no intention of letting him leave…",
        "popularity": 146.646,
        "poster_path": "/fKuyTfzKMOdwQi150Zu3DVXwi7J.jpg",
        "release_date": "2023-02-10",
        "title": "Disquiet",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 27
    },
    {
        "adult": false,
        "backdrop_path": "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
        "genre_ids": [
            28,
            53,
            80
        ],
        "id": 458156,
        "original_language": "en",
        "original_title": "John Wick: Chapter 3 - Parabellum",
        "overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
        "popularity": 188.405,
        "poster_path": "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
        "release_date": "2019-05-15",
        "title": "John Wick: Chapter 3 - Parabellum",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 9198
    },
    {
        "adult": false,
        "backdrop_path": "/4B6bYj7gr5wQBvQQhDwr6tzJyGR.jpg",
        "genre_ids": [
            10752,
            28,
            18
        ],
        "id": 966220,
        "original_language": "uk",
        "original_title": "Снайпер. Білий ворон",
        "overview": "Mykola is an eccentric pacifist who wants to be useful to humanity. When the war begins at Donbass, Mykola’s naive world is collapsing as the militants kill his pregnant wife and burn his home to the ground. Recovered, he makes a cardinal decision and gets enlisted in a sniper company. Having met his wife’s killers, he emotionally breaks down and arranges “sniper terror” for the enemy. He’s saved from a senseless death by his instructor who himself gets mortally wounded. The death of a friend leaves a “scar” and Mykola is ready to sacrifice his life.",
        "popularity": 184.39,
        "poster_path": "/295gZzTXMvuiIG0U19h4M44PXxI.jpg",
        "release_date": "2022-05-03",
        "title": "Sniper: The White Raven",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 377
    },
    {
        "adult": false,
        "backdrop_path": "/vXjpwkXPirBmgdEpIknfN8ziDD.jpg",
        "genre_ids": [
            16,
            12,
            14,
            35
        ],
        "id": 947938,
        "original_language": "ru",
        "original_title": "Мальчик-дельфин",
        "overview": "When a plane crashes at sea, dolphins rescue a little boy and raise him as family. He lives a carefree life beneath the waves until an evil monster seizes power over the underwater world. The boy is banished to dry land, where a kind-hearted captain takes him in. With the captain’s help, the boy sets out on a journey to solve the mystery of his true identity.",
        "popularity": 160.324,
        "poster_path": "/AcBgfBhdhvv5aKQP7iE8QsxFWBV.jpg",
        "release_date": "2022-04-07",
        "title": "Dolphin Boy",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 56
    },
    {
        "adult": false,
        "backdrop_path": "/jzdnhRhG0dsuYorwvSqPqqnM1cV.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 337339,
        "original_language": "en",
        "original_title": "The Fate of the Furious",
        "overview": "When a mysterious woman seduces Dom into the world of crime and a betrayal of those closest to him, the crew face trials that will test them as never before.",
        "popularity": 191.019,
        "poster_path": "/dImWM7GJqryWJO9LHa3XQ8DD5NH.jpg",
        "release_date": "2017-04-12",
        "title": "The Fate of the Furious",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 9459
    },
    {
        "adult": false,
        "backdrop_path": "/7cjY1IIrW1RwmHN8USPryKTAQHq.jpg",
        "genre_ids": [
            27
        ],
        "id": 988165,
        "original_language": "en",
        "original_title": "H.P. Lovecraft's Witch House",
        "overview": "Determined to prove the possibility of alternate dimensions, a graduate student unknowingly unlocks a gateway to unimaginable horror. Based on the H.P. Lovecraft's short story The Dreams in the Witch House.",
        "popularity": 161.969,
        "poster_path": "/5KmscR49WkmuPJKjmK4OUmsRn5C.jpg",
        "release_date": "2022-06-29",
        "title": "H.P. Lovecraft's Witch House",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 14
    },
    {
        "adult": false,
        "backdrop_path": "/hcODV0vOFE07zJLdeBA92fZYvv3.jpg",
        "genre_ids": [
            35
        ],
        "id": 1064841,
        "original_language": "es",
        "original_title": "Ustedes deciden",
        "overview": "Having had his fill of rejections in the acting business, Nico decides to pursue fame via another medium: social media. In a virtual world driven by influencers, likes, and celebrity obsessions, Nico stumbles into a series of hilarious and strange encounters that will test how far he’s willing to go for social media stardom.",
        "popularity": 172.991,
        "poster_path": "/QhyBSSw9dsDlyNvsXLKpHsQgI9.jpg",
        "release_date": "2023-01-25",
        "title": "Ustedes deciden",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 11
    },
    {
        "adult": false,
        "backdrop_path": "/90ZZIoWQLLEXSVm0ik3eEQBinul.jpg",
        "genre_ids": [
            28,
            27,
            53
        ],
        "id": 988233,
        "original_language": "en",
        "original_title": "Hex",
        "overview": "Following a mysterious disappearance on a jump, a group of skydivers experiences paranormal occurrences that leave them fighting for their lives.",
        "popularity": 169.529,
        "poster_path": "/mFukGiFZaVYoXIR8nrE95LlfbHG.jpg",
        "release_date": "2022-11-01",
        "title": "Hex",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 67
    },
    {
        "adult": false,
        "backdrop_path": "/qdFrqXYH6PtyAVlegub7bpoSgro.jpg",
        "genre_ids": [
            16,
            12,
            35,
            10751
        ],
        "id": 573171,
        "original_language": "es",
        "original_title": "Huevitos Congelados",
        "overview": "Follow the adventures of Toto and his family, who will have to travel to the South Pole to fulfill their promise to return a polar bear and some Spanish penguins to their home. In order to fulfill the promise, they will have to overcome some obstacles that will teach them how important teamwork is.",
        "popularity": 158.441,
        "poster_path": "/d7i9UXE7IfPx2uYtYKzgjs6zYzR.jpg",
        "release_date": "2022-12-14",
        "title": "A Frozen Rooster",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 282
    },
    {
        "adult": false,
        "backdrop_path": "/g704utk2uAwnFN8g5hhtQjq1Wj6.jpg",
        "genre_ids": [
            16,
            18
        ],
        "id": 230622,
        "original_language": "ja",
        "original_title": "Rain Town",
        "overview": "In this town, since who knows when, rain has never stopped. Residents moved out to suburbs and high ground around. People’s memories are now deeply submerged. But into this forgotten rainy town sometimes, someone wanders.",
        "popularity": 156.997,
        "poster_path": "/zfeOjiQWXIAaxCYwUrPzoy1poXy.jpg",
        "release_date": "2011-03-02",
        "title": "Rain Town",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 25
    },
    {
        "adult": false,
        "backdrop_path": "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
        "genre_ids": [
            80,
            9648,
            53
        ],
        "id": 414906,
        "original_language": "en",
        "original_title": "The Batman",
        "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        "popularity": 163.87,
        "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        "release_date": "2022-03-01",
        "title": "The Batman",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 7930
    },
    {
        "adult": false,
        "backdrop_path": "/vmws5PWFKl51kjFBcB92uyI8hNE.jpg",
        "genre_ids": [
            16,
            10751,
            12
        ],
        "id": 947704,
        "original_language": "fr",
        "original_title": "Yuku et la fleur de l’Himalaya",
        "overview": "Yuku is a young mouse who lives with her family in the cellar of a castle. Her grandmother passes on the family values by telling her timeless folk tales. Injured in a tussle with a cat, the old mouse is bedridden and she tells her children that she will have to leave them to follow the little blind mole into the Earth’s tunnels. In one of her grandmother’s storybooks, Yuku learns that the flower of the Himalayas can bring her eternal light. She leaves on a journey of discovery to find the flower.",
        "popularity": 157.998,
        "poster_path": "/8bBmqaVxQFtdLJYB0CCcuwnhptc.jpg",
        "release_date": "2022-10-19",
        "title": "Yuku and the Himalayan Flower",
        "video": false,
        "vote_average": 1.7,
        "vote_count": 3
    },
    {
        "adult": false,
        "backdrop_path": "/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 646385,
        "original_language": "en",
        "original_title": "Scream",
        "overview": "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
        "popularity": 173.464,
        "poster_path": "/nD4M4Bx457ryLuKYpxFwQ2IBJ5w.jpg",
        "release_date": "2022-01-12",
        "title": "Scream",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 2417
    },
    {
        "adult": false,
        "backdrop_path": "/muw9YsAsSd3DDRme2OEJJoVqun9.jpg",
        "genre_ids": [
            28
        ],
        "id": 850871,
        "original_language": "es",
        "original_title": "Sayen",
        "overview": "Sayen is hunting down the men who murdered her grandmother. Using her training and knowledge of nature, she is able to turn the tables on them, learning of a conspiracy from a corporation that threatens her people's ancestral lands.",
        "popularity": 162.427,
        "poster_path": "/aCy61aU7BMG7SfhkaAaasS0KzUO.jpg",
        "release_date": "2023-03-03",
        "title": "Sayen",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 77
    },
    {
        "adult": false,
        "backdrop_path": "/yELOCXWN7mHpztKppR3ZLWG0CUp.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 1079078,
        "original_language": "no",
        "original_title": "Royalteen: Princess Margrethe",
        "overview": "Last year’s prom ended in major drama for Princess Margrethe. She doesn’t dare tell anyone about what happened the night she was hospitalized. Suddenly the Danish royal family plans to visit Norway, and Princess Margrethe will finally get to meet the handsome Danish prince that she's been chatting with for months. As family drama starts piling up for the royal Norwegian family, she finds herself lost between taking care of her family, portraying herself as a strong princess, and being vulnerable in her quest for love.",
        "popularity": 270.872,
        "poster_path": "/2gkKRFDiuSvBB57glAMBsdRGeWk.jpg",
        "release_date": "2023-05-11",
        "title": "Royalteen: Princess Margrethe",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 26
    },
    {
        "adult": false,
        "backdrop_path": "/sGE6N1vJjxZLkOJEXdIOqTslxuL.jpg",
        "genre_ids": [
            99
        ],
        "id": 1087040,
        "original_language": "en",
        "original_title": "Money Shot: The Pornhub Story",
        "overview": "Featuring interviews with performers, activists and past employees, this documentary offers a deep dive into the successes and scandals of Pornhub.",
        "popularity": 160.116,
        "poster_path": "/kpTqWqLYcf1uErnx5VXLah4EWJZ.jpg",
        "release_date": "2023-03-15",
        "title": "Money Shot: The Pornhub Story",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 199
    },
    {
        "adult": false,
        "backdrop_path": "/cRdA9xjHBbobw4LJFsQ3j1CgpVq.jpg",
        "genre_ids": [
            27
        ],
        "id": 663712,
        "original_language": "en",
        "original_title": "Terrifier 2",
        "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
        "popularity": 165.123,
        "poster_path": "/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
        "release_date": "2022-10-06",
        "title": "Terrifier 2",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 1182
    },
    {
        "adult": false,
        "backdrop_path": "/cvOpdYUIk3elPdOk7Y5esBzKeM.jpg",
        "genre_ids": [
            16,
            35
        ],
        "id": 650270,
        "original_language": "ja",
        "original_title": "リョーマ！The Prince of Tennis 新生劇場版テニスの王子様",
        "overview": "Inspired by his tennis champion father, Ryoma is determined to take his game to the next level and train in the US. But in the middle of an intense tennis battle to save his classmate Sakuno from dangerous villains, they somehow find themselves transported back to the past, just as Ryoma’s father is about to undertake his final championship match at the US Open – when he was mysteriously forced to retire.",
        "popularity": 158.841,
        "poster_path": "/i3uOi1yikhDZP6VbA2lgsztBLCj.jpg",
        "release_date": "2021-11-11",
        "title": "Ryoma! The Prince of Tennis",
        "video": false,
        "vote_average": 2,
        "vote_count": 2
    },
    {
        "adult": false,
        "backdrop_path": "/cHkhb5A4gQRK6zs6Pv7zorHs8Nk.jpg",
        "genre_ids": [
            28,
            53,
            80
        ],
        "id": 168259,
        "original_language": "en",
        "original_title": "Furious 7",
        "overview": "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
        "popularity": 191.756,
        "poster_path": "/ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg",
        "release_date": "2015-04-01",
        "title": "Furious 7",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 9709
    },
    {
        "adult": false,
        "backdrop_path": "/2uSCHUsmzb6KkQPFSxBQ7bgfJLE.jpg",
        "genre_ids": [
            28,
            878,
            27
        ],
        "id": 345940,
        "original_language": "en",
        "original_title": "The Meg",
        "overview": "A deep sea submersible pilot revisits his past fears in the Mariana Trench, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.",
        "popularity": 146.624,
        "poster_path": "/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg",
        "release_date": "2018-08-09",
        "title": "The Meg",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 6412
    },
    {
        "adult": false,
        "backdrop_path": "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
        "genre_ids": [
            16,
            10751,
            35,
            14
        ],
        "id": 508947,
        "original_language": "en",
        "original_title": "Turning Red",
        "overview": "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
        "popularity": 147.247,
        "poster_path": "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
        "release_date": "2022-03-10",
        "title": "Turning Red",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 4171
    },
    {
        "adult": false,
        "backdrop_path": "/xTsERrOCW15OIYl5aPX7Jbj38wu.jpg",
        "genre_ids": [
            28,
            18,
            36
        ],
        "id": 724495,
        "original_language": "en",
        "original_title": "The Woman King",
        "overview": "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
        "popularity": 158.322,
        "poster_path": "/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
        "release_date": "2022-09-16",
        "title": "The Woman King",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1458
    },
    {
        "adult": false,
        "backdrop_path": "/e782pDRAlu4BG0ahd777n8zfPzZ.jpg",
        "genre_ids": [
            16,
            14,
            18,
            10402
        ],
        "id": 555604,
        "original_language": "en",
        "original_title": "Guillermo del Toro's Pinocchio",
        "overview": "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
        "popularity": 153.208,
        "poster_path": "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
        "release_date": "2022-11-09",
        "title": "Guillermo del Toro's Pinocchio",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 2255
    },
    {
        "adult": false,
        "backdrop_path": "/4geEJGCGcqz4LLzmj3Z60FvEeDZ.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 1070629,
        "original_language": "nl",
        "original_title": "Fijn Weekend",
        "overview": "A close-knit group of friends gather in French Burgundy to finally scatter ashes of their dead friend. When the widow unexpectedly brings her new boyfriend, the weekend takes a turn, and all friendships and relationships are put on edge.",
        "popularity": 165.666,
        "poster_path": "/fYC7EmTSl8NGmpqqtC0GXoSrGMd.jpg",
        "release_date": "2023-01-19",
        "title": "The Awkward Weekend",
        "video": false,
        "vote_average": 5,
        "vote_count": 13
    },
    {
        "adult": false,
        "backdrop_path": "/46FRuCeAn6TrS4F1P4F9zhyCpyo.jpg",
        "genre_ids": [
            18
        ],
        "id": 785084,
        "original_language": "en",
        "original_title": "The Whale",
        "overview": "A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
        "popularity": 148.973,
        "poster_path": "/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
        "release_date": "2022-12-09",
        "title": "The Whale",
        "video": false,
        "vote_average": 8,
        "vote_count": 2261
    },
    {
        "adult": false,
        "backdrop_path": "/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",
        "genre_ids": [
            28,
            12,
            14,
            878
        ],
        "id": 19995,
        "original_language": "en",
        "original_title": "Avatar",
        "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
        "popularity": 152.878,
        "poster_path": "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
        "release_date": "2009-12-15",
        "title": "Avatar",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 29072
    },
    {
        "adult": false,
        "backdrop_path": "/9j0V8Fw5u4cv9cESUXUmTGmpXU5.jpg",
        "genre_ids": [
            16,
            10751,
            35
        ],
        "id": 1058732,
        "original_language": "en",
        "original_title": "The Simpsons Meet the Bocellis in Feliz Navidad",
        "overview": "This Christmas, Homer surprises Marge with the ultimate gift: an unforgettable performance from Italian opera superstar Andrea Bocelli and his children Matteo and Virginia.",
        "popularity": 152.271,
        "poster_path": "/9rJFKvYvSyQ3HoTl1gcU55FOzYi.jpg",
        "release_date": "2022-12-15",
        "title": "The Simpsons Meet the Bocellis in Feliz Navidad",
        "video": false,
        "vote_average": 5.2,
        "vote_count": 38
    },
    {
        "adult": false,
        "backdrop_path": "/dqTOcdf1ILtakesKUhBOutaIee3.jpg",
        "genre_ids": [
            16,
            10749,
            878
        ],
        "id": 874743,
        "original_language": "ja",
        "original_title": "僕が愛したすべての君へ",
        "overview": "While struggling to make friends after his parents’ divorce, Koyomi Takasaki meets Kazune Takigawa, but apparently, they already have. Kazune reveals that she’s from World Line 85, an alternate universe in which she and Koyomi are lovers. But in a reality where moving between dimensions is natural, could Koyomi be the one from another world?",
        "popularity": 157.385,
        "poster_path": "/yl4WOrXTVFihtd6wcxpwkKD7xoP.jpg",
        "release_date": "2022-10-07",
        "title": "To Every You I've Loved Before",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 10
    },
    {
        "adult": false,
        "backdrop_path": "/4Ke47rydlVsqLphva2ySunSke0P.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 987257,
        "original_language": "en",
        "original_title": "Sweetwater",
        "overview": "In the fall of 1950, Nat \"Sweetwater\" Clifton forever changed the game of basketball when he entered the NBA. The story of the first African American to land a contract to play in the NBA.",
        "popularity": 152.656,
        "poster_path": "/18Jz0oJto5lwsZrQ11w3GKI6rtt.jpg",
        "release_date": "2023-04-14",
        "title": "Sweetwater",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 11
    },
    {
        "adult": false,
        "backdrop_path": "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            14
        ],
        "id": 568124,
        "original_language": "en",
        "original_title": "Encanto",
        "overview": "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
        "popularity": 150.208,
        "poster_path": "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
        "release_date": "2021-10-13",
        "title": "Encanto",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 8192
    },
    {
        "adult": false,
        "backdrop_path": "/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg",
        "genre_ids": [
            28,
            35,
            80,
            53
        ],
        "id": 899112,
        "original_language": "en",
        "original_title": "Violent Night",
        "overview": "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
        "popularity": 159.89,
        "poster_path": "/1XSYOP0JjjyMz1irihvWywro82r.jpg",
        "release_date": "2022-11-30",
        "title": "Violent Night",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1412
    },
    {
        "adult": false,
        "backdrop_path": "/svd6fPPsloJKbS72PJJ7xJqTevZ.jpg",
        "genre_ids": [
            878,
            53
        ],
        "id": 942199,
        "original_language": "en",
        "original_title": "Simulant",
        "overview": "Faye attempts to replace her newly deceased husband, Evan, with an android simulant (SIM). Although SIM Evan appears like human Evan in every way, Faye does not feel the same love for SIM Evan as it does for her. SIM Evan tries to win Faye back while at the same time being on-the-run from a government agent chasing down SIMs who have become “conscious” and could potentially be a threat to humankind.",
        "popularity": 140.429,
        "poster_path": "/kmDJhZIq1xnu5ZiMOlb0nHJH1qb.jpg",
        "release_date": "2023-03-29",
        "title": "Simulant",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 46
    },
    {
        "adult": false,
        "backdrop_path": "/r17jFHAemzcWPPtoO0UxjIX0xas.jpg",
        "genre_ids": [
            28,
            53,
            80
        ],
        "id": 324552,
        "original_language": "en",
        "original_title": "John Wick: Chapter 2",
        "overview": "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.",
        "popularity": 163.984,
        "poster_path": "/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
        "release_date": "2017-02-08",
        "title": "John Wick: Chapter 2",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 11495
    },
    {
        "adult": false,
        "backdrop_path": "/9H7oVnG4P75bda0y1t7EGDoPnRD.jpg",
        "genre_ids": [
            10752,
            28,
            12,
            53
        ],
        "id": 964426,
        "original_language": "no",
        "original_title": "Gulltransporten",
        "overview": "Fredrik isn’t the bravest of men, but now he is faced with a great responsibility and an enormous task - to get the entire Norwegian gold reserve away from the Nazis during the invasion of Norway.",
        "popularity": 153.744,
        "poster_path": "/6E4LopmCMUXcMLIv7o3jw1xQrgJ.jpg",
        "release_date": "2022-12-15",
        "title": "Gold Run",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 37
    },
    {
        "adult": false,
        "backdrop_path": "/maxRhndtC4BJABvqRPvYNu69CHA.jpg",
        "genre_ids": [
            28,
            18,
            36
        ],
        "id": 551271,
        "original_language": "en",
        "original_title": "Medieval",
        "overview": "The story of 14th century Czech icon and warlord Jan Zizka who defeated armies of the Teutonic Order and the Holy Roman Empire.",
        "popularity": 133.146,
        "poster_path": "/eeUNWsdoiOijOZAMaWFDA5Pb1n8.jpg",
        "release_date": "2022-09-08",
        "title": "Medieval",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 377
    },
    {
        "adult": false,
        "backdrop_path": "/2E6pIbJien7B9yWpaz8Yd2njzUI.jpg",
        "genre_ids": [
            18,
            27
        ],
        "id": 1026563,
        "original_language": "es",
        "original_title": "13 exorcismos",
        "overview": "After participating in a séance, young Laura begins to behave strangely. Alarmed, her parents ask Father Olmedo, one of the few exorcists authorized by the Vatican to intervene in cases of demonic possession, for help.",
        "popularity": 146.038,
        "poster_path": "/kdaEAPrT3Dq7pPjdhfTgNyMeOnK.jpg",
        "release_date": "2022-11-04",
        "title": "13 Exorcisms",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 69
    },
    {
        "adult": false,
        "backdrop_path": "/vFJ208yMK5rWoJ1aBy1Q1AsXzVp.jpg",
        "genre_ids": [
            10749
        ],
        "id": 701952,
        "original_language": "ko",
        "original_title": "여친 엄마2",
        "overview": "Young Se-hee gets married to middle aged Min-goo, but she's not happy with his 'item' as he's old. While she goes on vacation with her husband, Min-goo's daughter Yoo-jin calls her boyfriend Ji-hoon to the house when her parents are not there and they have sex. Meanwhile, Se-hee comes back home early from the vacation because her husband has to work and runs into a completely naked Ji-hoon.",
        "popularity": 232.537,
        "poster_path": "/5OMeVCF5jZpCrrvJNEMMP0vOoIH.jpg",
        "release_date": "2018-08-30",
        "title": "My Girlfriend's Mother 2",
        "video": false,
        "vote_average": 2.2,
        "vote_count": 5
    },
    {
        "adult": false,
        "backdrop_path": "/9iRRfMZbnpgHDdKi2lczGGYZXDo.jpg",
        "genre_ids": [
            12,
            10751,
            14
        ],
        "id": 411,
        "original_language": "en",
        "original_title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        "overview": "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
        "popularity": 172.175,
        "poster_path": "/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
        "release_date": "2005-12-07",
        "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 9527
    },
    {
        "adult": false,
        "backdrop_path": "/fwrqW8Lp5VQuppFrODd4iJ8LySE.jpg",
        "genre_ids": [
            28,
            12
        ],
        "id": 335787,
        "original_language": "en",
        "original_title": "Uncharted",
        "overview": "A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.",
        "popularity": 139.17,
        "poster_path": "/rJHC1RUORuUhtfNb4Npclx0xnOf.jpg",
        "release_date": "2022-02-10",
        "title": "Uncharted",
        "video": false,
        "vote_average": 7,
        "vote_count": 4677
    },
    {
        "adult": false,
        "backdrop_path": "/qE3QIUTvoAeZZlCv0xlxFhsVMPE.jpg",
        "genre_ids": [
            35,
            27,
            53
        ],
        "id": 1073413,
        "original_language": "es",
        "original_title": "Fenómenas",
        "overview": "Madrid, Spain, 1998. The many resources and skills of Gloria, Paz and Sagrario, three middle-aged women investigating paranormal events, are put to the test when their leader, Father Pilón, has an unpleasant encounter.",
        "popularity": 146.592,
        "poster_path": "/liosTyTUf0ObasR2HLTOrHQlzth.jpg",
        "release_date": "2023-04-14",
        "title": "Phenomena",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 79
    },
    {
        "adult": false,
        "backdrop_path": "/ve3RLbCSuUKA02OZJ5F0fMmXVMn.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 829410,
        "original_language": "en",
        "original_title": "Sick",
        "overview": "In the midst of the pandemic, college student Parker and her best friend Miri decide to self-quarantine at her family's lake house, where they will be alone — or so they think.",
        "popularity": 136.05,
        "poster_path": "/nBgxSimgLMGYCQckRQw7C2f7row.jpg",
        "release_date": "2022-09-11",
        "title": "Sick",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 135
    },
    {
        "adult": false,
        "backdrop_path": "/uMSxXLfH7v30gRNBqsQaSP3yqX5.jpg",
        "genre_ids": [
            16,
            35,
            10751
        ],
        "id": 438148,
        "original_language": "en",
        "original_title": "Minions: The Rise of Gru",
        "overview": "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
        "popularity": 147.338,
        "poster_path": "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
        "release_date": "2022-06-29",
        "title": "Minions: The Rise of Gru",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 2821
    },
    {
        "adult": false,
        "backdrop_path": "/kMZIMqEXO5MFd5Y1Ha2jZZF4pvF.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 882598,
        "original_language": "en",
        "original_title": "Smile",
        "overview": "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
        "popularity": 133.725,
        "poster_path": "/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
        "release_date": "2022-09-23",
        "title": "Smile",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 2008
    },
    {
        "adult": false,
        "backdrop_path": "/Aqldsq65Nj1KAkQD2MzkZsAk5N5.jpg",
        "genre_ids": [
            28,
            80,
            18,
            53
        ],
        "id": 846433,
        "original_language": "en",
        "original_title": "The Enforcer",
        "overview": "A noir thriller set in Miami, the film follows an enforcer who discovers his femme fatale boss has branched out into cyber sex trafficking, putting a young runaway he’s befriended at risk. He sacrifices everything to save the young girl from the deadly organization he’s spent his life building.",
        "popularity": 155.157,
        "poster_path": "/pXC8JJbfnRWtbD8i2yKFqqWEO4X.jpg",
        "release_date": "2022-09-22",
        "title": "The Enforcer",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 305
    },
    {
        "adult": false,
        "backdrop_path": "/e534w0IhBjrBGe97xVWwcn75jtX.jpg",
        "genre_ids": [
            878,
            28,
            12,
            10751
        ],
        "id": 620705,
        "original_language": "en",
        "original_title": "Crater",
        "overview": "After the death of his father, a boy growing up on a lunar mining colony takes a trip to explore a legendary crater, along with his four best friends, prior to being permanently relocated to another planet.",
        "popularity": 233.829,
        "poster_path": "/n8ZpMwYT02XjpQHpSxn1eJw5Zpz.jpg",
        "release_date": "2023-05-12",
        "title": "Crater",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 68
    },
    {
        "adult": false,
        "backdrop_path": "/nI2nNWCZZIMFb1sV7RVq1Nd8iWM.jpg",
        "genre_ids": [
            16,
            14,
            12
        ],
        "id": 1012404,
        "original_language": "ja",
        "original_title": "ソードアート・オンライン Extra Edition",
        "overview": "Kirito and some of his new friends look back at the events of season one. Kirito recalls his defining moments while Suguha learns to swim with the help of Asuna and other girls who fought alongside Kirito.",
        "popularity": 144.908,
        "poster_path": "/nWr2GUTKRR4d8aCApF93OzBfq3e.jpg",
        "release_date": "2013-12-31",
        "title": "Sword Art Online: Extra Edition",
        "video": false,
        "vote_average": 6,
        "vote_count": 5
    },
    {
        "adult": false,
        "backdrop_path": "/etP5jwlwvkNhwe7jnI2AyA6ZKrR.jpg",
        "genre_ids": [
            878,
            27
        ],
        "id": 575322,
        "original_language": "en",
        "original_title": "Звёздный разум",
        "overview": "After depleting Earth's resources for centuries, humankind's survival requires an exodus to outer space. An international expedition is quickly formed to find a suitable new planet, but when plans go awry, the crew is suddenly stranded without power on a strange planet, where something unimaginable lies in wait.",
        "popularity": 129.468,
        "poster_path": "/rFljUdOozFEv6HDHIFpFvcYW0ec.jpg",
        "release_date": "2022-01-06",
        "title": "Project Gemini",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 322
    },
    {
        "adult": false,
        "backdrop_path": "/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg",
        "genre_ids": [
            18,
            10752,
            36
        ],
        "id": 49046,
        "original_language": "de",
        "original_title": "Im Westen nichts Neues",
        "overview": "Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.",
        "popularity": 151.111,
        "poster_path": "/2IRjbi9cADuDMKmHdLK7LaqQDKA.jpg",
        "release_date": "2022-10-07",
        "title": "All Quiet on the Western Front",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2668
    },
    {
        "adult": false,
        "backdrop_path": "/uNK5dHo6HJpwk1BPcDHHyvX7ZLz.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 983768,
        "original_language": "en",
        "original_title": "Black Warrant",
        "overview": "A semi-retired special ops assassin and a DEA agent cross paths on separate missions to stop a cyber terrorist organization that has built a dangerous machine threatening to attack the power grid and bring catastrophe to the world.",
        "popularity": 136.408,
        "poster_path": "/A7vFFZHbDyxfjuYKzJwruTnwwjT.jpg",
        "release_date": "2023-01-09",
        "title": "Black Warrant",
        "video": false,
        "vote_average": 5.3,
        "vote_count": 30
    },
    {
        "adult": false,
        "backdrop_path": "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        "genre_ids": [
            12,
            18,
            878
        ],
        "id": 157336,
        "original_language": "en",
        "original_title": "Interstellar",
        "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        "popularity": 143.348,
        "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "release_date": "2014-11-05",
        "title": "Interstellar",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 31363
    },
    {
        "adult": false,
        "backdrop_path": "/A2avUoNFstnBhAnHiogXQs4c9Bt.jpg",
        "genre_ids": [
            18,
            27,
            9648
        ],
        "id": 772515,
        "original_language": "es",
        "original_title": "Huesera",
        "overview": "Valeria's joy at becoming a first-time mother is quickly taken away when she's cursed by a sinister entity. As danger closes in, she's forced deeper into a chilling world of dark magic that threatens to consume her.",
        "popularity": 131.842,
        "poster_path": "/zgpj76z9byUgcWnxLDmtZ3XqfvN.jpg",
        "release_date": "2023-02-10",
        "title": "Huesera: The Bone Woman",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 194
    },
    {
        "adult": false,
        "backdrop_path": "/6cpRpfD3isvluFwXDGSiDVyibPJ.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 829560,
        "original_language": "pl",
        "original_title": "Kolejne 365 dni",
        "overview": "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
        "popularity": 157.142,
        "poster_path": "/6FsGeIp7heHm5eh4tIxTzHIRxmt.jpg",
        "release_date": "2022-08-19",
        "title": "The Next 365 Days",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 735
    },
    {
        "adult": false,
        "backdrop_path": "/xnAi4BRoO3ZQ3wwxGn6UNoxQzDq.jpg",
        "genre_ids": [
            80,
            28
        ],
        "id": 823999,
        "original_language": "it",
        "original_title": "Diabolik - Ginko all'attacco!",
        "overview": "Diabolik nearly gets caught in Inspector Ginko's latest trap, leaving his partner in crime Eva Kant behind in the escape. Furious, Eva offers Ginko her help in capturing the King of Terror, but the former has to face the return of an old flame of his.",
        "popularity": 147.642,
        "poster_path": "/8QVbWBv94BAT9u1q9uJccwOxMzt.jpg",
        "release_date": "2022-11-17",
        "title": "Diabolik - Ginko Attacks",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 250
    },
    {
        "adult": false,
        "backdrop_path": "/oeBom7DLr85lixEkWOGmhCPEfuY.jpg",
        "genre_ids": [
            80,
            18,
            53
        ],
        "id": 842942,
        "original_language": "en",
        "original_title": "Bandit",
        "overview": "After escaping a Michigan prison, a charming career criminal assumes a new identity in Canada and goes on to rob a record 59 banks and jewellery stores while being hunted by a rogue task force. Based on the story of The Flying Bandit.",
        "popularity": 145.58,
        "poster_path": "/yph9PAbmjYPvyvbeZvdYIhCZHEu.jpg",
        "release_date": "2022-09-23",
        "title": "Bandit",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 162
    },
    {
        "adult": false,
        "backdrop_path": "/6mJrgL7Mi13XjJeGYJFlD6UEVQw.jpg",
        "genre_ids": [
            16,
            10751
        ],
        "id": 438695,
        "original_language": "en",
        "original_title": "Sing 2",
        "overview": "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
        "popularity": 125.247,
        "poster_path": "/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
        "release_date": "2021-12-01",
        "title": "Sing 2",
        "video": false,
        "vote_average": 8,
        "vote_count": 3679
    },
    {
        "adult": false,
        "backdrop_path": "/qAfGVKCOg1ueNFOA9KL85lo9zox.jpg",
        "genre_ids": [
            10749,
            18,
            35
        ],
        "id": 1016121,
        "original_language": "en",
        "original_title": "Beautiful Disaster",
        "overview": "Bad-boy Travis is exactly what college freshman Abby needs and wants to avoid. He spends his nights fighting in underground boxing matches, and his days as the ultimate college campus charmer. But Abby wants nothing to do with Travis. Intrigued by Abby’s resistance, Travis offers her a simple bet: if he loses his next fight, he must remain sex-free for a month. If he wins, Abby must live in his apartment for the same amount of time. Either way, Travis has no idea that Abby’s dark past is about to emerge, and he may have finally met his match.",
        "popularity": 131.663,
        "poster_path": "/bwdLflvCcOCRPqb1x13KPuYIzVx.jpg",
        "release_date": "2023-04-04",
        "title": "Beautiful Disaster",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 109
    },
    {
        "adult": false,
        "backdrop_path": "/bvAMLx00BOr6vkSQWZscwGrPdGI.jpg",
        "genre_ids": [
            53,
            28,
            18,
            80
        ],
        "id": 1058949,
        "original_language": "en",
        "original_title": "Little Dixie",
        "overview": "Erstwhile Special Forces operative Doc Alexander is asked to broker a truce with the Mexican drug cartel in secrecy. When Oklahoma Governor Richard Jeffs celebrates the execution of a high-ranking cartel member on TV, his Chief of Staff and Doc inform him about the peace he just ended. But it’s too late, as Cuco, the cartel’s hatchet man, has set his vengeful sights on Doc’s daughter Dixie.",
        "popularity": 133.6,
        "poster_path": "/cmWTZj9zzT9KFt3XyL0gssL7Ig8.jpg",
        "release_date": "2023-02-03",
        "title": "Little Dixie",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 99
    },
    {
        "adult": false,
        "backdrop_path": "/dPRGYDPaOpUh4kEfwEnf9YLXOc5.jpg",
        "genre_ids": [
            18,
            12,
            14
        ],
        "id": 726274,
        "original_language": "eu",
        "original_title": "Irati",
        "overview": "Western Pyrenees, year 778. When his land is threatened by the ruthless armies of the Frankish emperor, a Basque warlord asks for help from his ancestral gods.",
        "popularity": 136.89,
        "poster_path": "/jVUpT8PIWU9mpUWQqEyYDqmFN2y.jpg",
        "release_date": "2023-02-24",
        "title": "Irati",
        "video": false,
        "vote_average": 7,
        "vote_count": 36
    },
    {
        "adult": false,
        "backdrop_path": "/43WkvO1EVTHz2rTlswdhmzjlNRF.jpg",
        "genre_ids": [
            35
        ],
        "id": 1120558,
        "original_language": "es",
        "original_title": "Bendita Suegra",
        "overview": "Andrea, a successful veterinarian who loves her job and is in a relationship with Lucio, an up-and-coming lawyer who grew up in the country. Lucio has some news for Andrea: his mother is turning 60 and is throwing a big party to celebrate. Andrea visits the town where Lucio was raised for the first time and would like to become very close to his family, especially her new Mother-in-law Blanca, who is an overprotective mother, ultra-conservative and always thinks she’s right about everything. Andrea tries to fit in by tolerating all her quirks and harsh treatment during the torturous weekend.",
        "popularity": 217.83,
        "poster_path": "/5xupm2thQic5GzYi6nim6URMZOY.jpg",
        "release_date": "2023-05-10",
        "title": "Bendita Suegra",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 16
    },
    {
        "adult": false,
        "backdrop_path": "/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg",
        "genre_ids": [
            10752,
            18,
            28
        ],
        "id": 653851,
        "original_language": "en",
        "original_title": "Devotion",
        "overview": "The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",
        "popularity": 142.374,
        "poster_path": "/26yQPXymbWeCLKwcmyL8dRjAzth.jpg",
        "release_date": "2022-11-23",
        "title": "Devotion",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 480
    },
    {
        "adult": false,
        "backdrop_path": "/isGINC82PZmMblEJP2rBAvSlX37.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            35
        ],
        "id": 599019,
        "original_language": "ru",
        "original_title": "Большое путешествие. Специальная доставка",
        "overview": "It has been a year since Mic Mic and Oscar returned from their incredible adventure. And now, after a diabolical plan by Vulture to sabotage the delivery of the Grizzly cub to his opponent in the American presidential elections, Mic Mic, Oscar, Panda teenager and Stork set off on another great adventure as they ride a zeppelin to return little Grizzly to its rightful parents and save the American elections and the whole continent from an erupting volcano.",
        "popularity": 127.928,
        "poster_path": "/dabXVfrAFfhDte8XVemom3mTJog.jpg",
        "release_date": "2022-10-07",
        "title": "Big Trip 2: Special Delivery",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 63
    },
    {
        "adult": false,
        "backdrop_path": "/ttXABm22Vu9MsQjDAF3Lx2nUPy0.jpg",
        "genre_ids": [
            35,
            28
        ],
        "id": 1101799,
        "original_language": "es",
        "original_title": "Fuga de Reinas",
        "overview": "When four women finally take the road trip they planned in high school, they have no idea of the things they'll bump into sometimes literally.",
        "popularity": 127.466,
        "poster_path": "/oUmuwUIofGsgOr05kieD3Q8ELEO.jpg",
        "release_date": "2023-04-14",
        "title": "Queens on the Run",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 87
    },
    {
        "adult": false,
        "backdrop_path": "/ceYZCBfwbBwSpGJ6PapNVw5jqLG.jpg",
        "genre_ids": [
            16,
            18,
            12,
            14
        ],
        "id": 916224,
        "original_language": "ja",
        "original_title": "すずめの戸締まり",
        "overview": "Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right.",
        "popularity": 128.588,
        "poster_path": "/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
        "release_date": "2022-11-11",
        "title": "Suzume",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 363
    },
    {
        "adult": false,
        "backdrop_path": "/32GH8Mi4GmTPIQyd6IW1FFrHWrj.jpg",
        "genre_ids": [
            28
        ],
        "id": 965839,
        "original_language": "en",
        "original_title": "Lord of the Streets",
        "overview": "When Jason Dyson refuses to make his prized fighter throw an MMA match, a notorious gangster collects his debt by killing the fighter and kidnapping Jason's daughter. Now he must train a prisoner to endure five consecutive underground fights to save her.",
        "popularity": 114.094,
        "poster_path": "/n9YWVQRc0zw0nwrFcOkOpffZxjc.jpg",
        "release_date": "2022-04-22",
        "title": "Lord of the Streets",
        "video": false,
        "vote_average": 5.2,
        "vote_count": 63
    },
    {
        "adult": false,
        "backdrop_path": "/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg",
        "genre_ids": [
            28,
            35,
            53
        ],
        "id": 718930,
        "original_language": "en",
        "original_title": "Bullet Train",
        "overview": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
        "popularity": 142.416,
        "poster_path": "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
        "release_date": "2022-07-03",
        "title": "Bullet Train",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 4172
    },
    {
        "adult": false,
        "backdrop_path": "/jDkmlTz9xBmhsIIyORb68VqRlL2.jpg",
        "genre_ids": [
            18,
            27
        ],
        "id": 955991,
        "original_language": "en",
        "original_title": "The Offering",
        "overview": "In the wake of a young Jewish girl’s disappearance, the son of a Hasidic funeral director returns home with his pregnant wife in hopes of reconciling with his father. Little do they know that directly beneath them in the family morgue, an ancient evil with sinister plans for the unborn child lurks inside a mysterious corpse.",
        "popularity": 122.086,
        "poster_path": "/tbaTFgGIaTL1Uhd0SMob6Dhi5cK.jpg",
        "release_date": "2022-09-23",
        "title": "The Offering",
        "video": false,
        "vote_average": 5.7,
        "vote_count": 129
    },
    {
        "adult": false,
        "backdrop_path": "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
        "genre_ids": [
            27,
            53,
            9648
        ],
        "id": 717728,
        "original_language": "en",
        "original_title": "Jeepers Creepers: Reborn",
        "overview": "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
        "popularity": 128.788,
        "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
        "release_date": "2022-09-15",
        "title": "Jeepers Creepers: Reborn",
        "video": false,
        "vote_average": 5.7,
        "vote_count": 769
    },
    {
        "adult": false,
        "backdrop_path": "/xiwHOMJRk24W9820HFSG7wdBuNa.jpg",
        "genre_ids": [
            18,
            27,
            53
        ],
        "id": 931954,
        "original_language": "es",
        "original_title": "Venus",
        "overview": "Lucía, a club dancer on the run, takes refuge in a sinister building on the outskirts of Madrid where her sister Rocío lives with her daughter Alba.",
        "popularity": 113.772,
        "poster_path": "/vyQmDx5CF8x9T6WKCLuoFotGpjf.jpg",
        "release_date": "2022-12-02",
        "title": "Venus",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 87
    },
    {
        "adult": false,
        "backdrop_path": "/nITzFbM1JS7WEvFjjGL0kCb2yPr.jpg",
        "genre_ids": [
            16,
            10751,
            12
        ],
        "id": 1045944,
        "original_language": "en",
        "original_title": "The Boss Baby: Christmas Bonus",
        "overview": "Christmas Eve takes a twisty turn when the Boss Baby accidentally swaps places with one of Santa's elves and gets stranded at the North Pole.",
        "popularity": 123.662,
        "poster_path": "/iMmMxF6f2OonUrXrHKBLSYAhXly.jpg",
        "release_date": "2022-12-06",
        "title": "The Boss Baby: Christmas Bonus",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 233
    },
    {
        "adult": false,
        "backdrop_path": "/sRvXNDItGlWCqtO3j6wks52FmbD.jpg",
        "genre_ids": [
            16,
            35,
            14,
            12,
            10751
        ],
        "id": 808,
        "original_language": "en",
        "original_title": "Shrek",
        "overview": "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.",
        "popularity": 125.14,
        "poster_path": "/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
        "release_date": "2001-05-18",
        "title": "Shrek",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 15302
    },
    {
        "adult": false,
        "backdrop_path": "/oO5pgJyPRaR0FgOhkeCNvb8K8ix.jpg",
        "genre_ids": [
            27
        ],
        "id": 1104191,
        "original_language": "es",
        "original_title": "Solo Somos Carne",
        "overview": "A regular day for Bans and Uzu, little did they know a series of events would bring them face to face with an alternate reality and their chance to confront Dixon, a disturbed psychopath with blood on his hands and demons in his mind.",
        "popularity": 121.311,
        "poster_path": "/9eVqMhZEbq53VFbmRNqh3yzT0xM.jpg",
        "release_date": "2022-10-13",
        "title": "Solo Somos Carne",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 6
    },
    {
        "adult": false,
        "backdrop_path": "/A34inrFSAIQNatFGc8qP5kfwDmV.jpg",
        "genre_ids": [
            28,
            12,
            18,
            14,
            16
        ],
        "id": 118412,
        "original_language": "ja",
        "original_title": "ベルセルク 黄金時代篇II ドルドレイ攻略",
        "overview": "The Band of the Hawk participates in the Midland war campaign. On the bloody battlefield, they conquer decisive victories that lead them to Doldrey, an old fortress that will decide the outcome of the war.",
        "popularity": 116.283,
        "poster_path": "/gzVQQaDazukAcmiFx6l9WLj1kwo.jpg",
        "release_date": "2012-06-23",
        "title": "Berserk: The Golden Age Arc II - The Battle for Doldrey",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 310
    },
    {
        "adult": false,
        "backdrop_path": "/muWigu80dbc41sKF51X4Q9ECsic.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            14,
            12
        ],
        "id": 585083,
        "original_language": "en",
        "original_title": "Hotel Transylvania: Transformania",
        "overview": "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
        "popularity": 114.703,
        "poster_path": "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
        "release_date": "2022-02-25",
        "title": "Hotel Transylvania: Transformania",
        "video": false,
        "vote_average": 7,
        "vote_count": 1514
    },
    {
        "adult": false,
        "backdrop_path": "/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg",
        "genre_ids": [
            16,
            28,
            12,
            878
        ],
        "id": 569094,
        "original_language": "en",
        "original_title": "Spider-Man: Across the Spider-Verse",
        "overview": "After reuniting with Gwen Stacy, Miles Morales — Brooklyn's full-time, friendly neighborhood Spider-Man — is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must redefine what it means to be a hero so he can save the people he loves most.",
        "popularity": 140.441,
        "poster_path": "/zPoqAu4gxZRmcPzSLFJ9b0VciaL.jpg",
        "release_date": "2023-05-31",
        "title": "Spider-Man: Across the Spider-Verse",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/pr5B7Hb7711QQDirAyS5P7fKjts.jpg",
        "genre_ids": [
            53,
            28,
            27,
            12,
            18
        ],
        "id": 760741,
        "original_language": "en",
        "original_title": "Beast",
        "overview": "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
        "popularity": 104.832,
        "poster_path": "/f18rGcLlawKjNC5KRh36S0mvRlY.jpg",
        "release_date": "2022-08-11",
        "title": "Beast",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 1098
    },
    {
        "adult": false,
        "backdrop_path": "/zxWAv1A34kdYslBi4ekMDtgIGUt.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 566525,
        "original_language": "en",
        "original_title": "Shang-Chi and the Legend of the Ten Rings",
        "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
        "popularity": 113.834,
        "poster_path": "/d08HqqeBQSwN8i8MEvpsZ8Cb438.jpg",
        "release_date": "2021-09-01",
        "title": "Shang-Chi and the Legend of the Ten Rings",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 8043
    },
    {
        "adult": false,
        "backdrop_path": "/xHRabofjmMGoIV3mb6xgy4nwOcS.jpg",
        "genre_ids": [
            27
        ],
        "id": 801071,
        "original_language": "en",
        "original_title": "The Jack in the Box: Awakening",
        "overview": "When a vintage Jack-in-the-box is opened by a dying woman, she enters into a deal with the demon within that would see her illness cured in return for helping it claim six innocent victims.",
        "popularity": 107.992,
        "poster_path": "/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg",
        "release_date": "2022-02-24",
        "title": "The Jack in the Box: Awakening",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 277
    },
    {
        "adult": false,
        "backdrop_path": "/oGY415S8J0NxVbXKHaEOwns1ZWf.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 507250,
        "original_language": "en",
        "original_title": "Dead Shot",
        "overview": "In the 1970s, a member of the IRA takes over an Active Service Unit in London after his wife is accidentally shot dead in Ireland. The unit's mission is to cause chaos and destruction, while his personal aim is to hunt down his wife’s killer — an SAS captain, who is also hunting him.",
        "popularity": 192.905,
        "poster_path": "/s0Qx9YL1JSpYKm1hu0Ovj0IJ1SN.jpg",
        "release_date": "2023-05-12",
        "title": "Dead Shot",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 5
    },
    {
        "adult": false,
        "backdrop_path": "/rl7Jw8PjhSIjArOlDNv0JQPL1ZV.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 851644,
        "original_language": "ko",
        "original_title": "20세기 소녀",
        "overview": "Yeon-du asks her best friend Bora to collect all the information she can about Baek Hyun-jin while she is away in the U.S. for heart surgery. Bora decides to get close to Baek's best friend, Pung Woon-ho first. However, Bora's clumsy plan unfolds in an unexpected direction. In 1999, a year before the new century, Bora, who turns seventeen, falls into the fever of first love.",
        "popularity": 123.33,
        "poster_path": "/od22ftNnyag0TTxcnJhlsu3aLoU.jpg",
        "release_date": "2022-10-06",
        "title": "20th Century Girl",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 452
    },
    {
        "adult": false,
        "backdrop_path": "/fEe2csLOUsTyaLdCccVJfFeJzhx.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 298618,
        "original_language": "en",
        "original_title": "The Flash",
        "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        "popularity": 119.311,
        "poster_path": "/wtxQcQxqIVStja6DFksiwC1tER8.jpg",
        "release_date": "2023-06-14",
        "title": "The Flash",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/d0u1zrbOZJYQZzXYhrG7RhARxSI.jpg",
        "genre_ids": [
            53,
            9648
        ],
        "id": 993621,
        "original_language": "en",
        "original_title": "The Stranger in Our Bed",
        "overview": "A newly married woman leaves her wealthy husband for a lover who mysteriously disappears. Things start to unravel and become life-threatening on a trip to the husband's family estate.",
        "popularity": 114.984,
        "poster_path": "/9bX57QlmpI1DcWLkggGmg5guqJx.jpg",
        "release_date": "2022-08-26",
        "title": "The Stranger in Our Bed",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 27
    },
    {
        "adult": false,
        "backdrop_path": "/5wDBVictj4wUYZ31gR5WzCM9dLD.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            878
        ],
        "id": 877269,
        "original_language": "en",
        "original_title": "Strange World",
        "overview": "A journey deep into an uncharted and treacherous land, where fantastical creatures await the legendary Clades—a family of explorers whose differences threaten to topple their latest, and by far most crucial, mission.",
        "popularity": 115.841,
        "poster_path": "/fHMqfsYyl3lskPK2RiFRwhzwuep.jpg",
        "release_date": "2022-11-23",
        "title": "Strange World",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 943
    },
    {
        "adult": false,
        "backdrop_path": "/sE6uilkTOIdg1zbZ3S8UKJ7Q9Av.jpg",
        "genre_ids": [
            18,
            10749,
            28
        ],
        "id": 845659,
        "original_language": "en",
        "original_title": "Perfect Addiction",
        "overview": "A female boxing trainer discovers that her champion cage-fighter boyfriend has been cheating on her with her sister and decides to seek revenge by training up his arch-rival to challenge him.",
        "popularity": 111.922,
        "poster_path": "/3wkrRKMFRwCpjp1U27914oRbcqH.jpg",
        "release_date": "2023-02-16",
        "title": "Perfect Addiction",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 111
    },
    {
        "adult": false,
        "backdrop_path": "/hu2K1XlEyRjO2JvzIHBa6cPQRAi.jpg",
        "genre_ids": [
            9648,
            53
        ],
        "id": 989473,
        "original_language": "en",
        "original_title": "Invitation to a Murder",
        "overview": "1934. South of England. For no apparent reason and like five other unrelated people, Miranda, a 28-year-old florist, is invited for the weekend in the mansion of billionaire Lewis Findley",
        "popularity": 108.447,
        "poster_path": "/8OyzvMrVx2tXjyJiE3GZpvaXE2T.jpg",
        "release_date": "2023-05-05",
        "title": "Invitation to a Murder",
        "video": false,
        "vote_average": 6,
        "vote_count": 21
    },
    {
        "adult": false,
        "backdrop_path": "/v7GQxa9ZmdMZjt4JwZF54mvAiTv.jpg",
        "genre_ids": [
            28,
            12,
            14,
            16
        ],
        "id": 113082,
        "original_language": "ja",
        "original_title": "ベルセルク 黄金時代篇I 覇王の卵",
        "overview": "Guts, an immensely strong sword-for-hire, has little direction in his life, simply fighting one battle after the next. However, this all changes suddenly when he meets and is bested by Griffith, a beautiful and charismatic young man who leads the Band of the Hawk mercenary army. After Guts joins the Band and the relationship between the two men begins to blossom, Casca, the tough, lone swordswoman in the Band of the Hawk, struggles to accept Guts and the influence he has on the world around her.  While the two men begin to fight together, Griffith continues to rise to power, all seemingly in order to reach his mysterious, prophesied goals. What lengths will Guts and Griffith go to in order to reach these goals, and where will fate take the two men?",
        "popularity": 110.082,
        "poster_path": "/vES8WAzjowrMT8gwnoEaCioZXXk.jpg",
        "release_date": "2012-02-03",
        "title": "Berserk: The Golden Age Arc I - The Egg of the King",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 392
    },
    {
        "adult": false,
        "backdrop_path": "/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 580489,
        "original_language": "en",
        "original_title": "Venom: Let There Be Carnage",
        "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        "popularity": 112.423,
        "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        "release_date": "2021-09-30",
        "title": "Venom: Let There Be Carnage",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 8784
    },
    {
        "adult": false,
        "backdrop_path": "/qOPvylwr2yibx4i2jurMwh9SIRJ.jpg",
        "genre_ids": [
            27
        ],
        "id": 78428,
        "original_language": "cn",
        "original_title": "聊齋艷譚續集五通神",
        "overview": "Wutung a sex demon returns in another body where he falls for the mortal girl Hsiao-yen, but heaven thinks otherwise with the girl being burned at the stake and her soul being incarnated in the just born Fang Yu-yin. Anger fills Wutung, and to stop this vengeance the town near his lair promise to offer him a virgin girl at the end of every month to become his sex slave. Ya-Yin is selected; however her lover rescues her from the clutches of Wutung. So Wutung sends his demon concubine to get her back, and to cause havoc on the village for the interference.",
        "popularity": 116.478,
        "poster_path": "/ighnU4PYk0AQDW9qkD64E5p4hRd.jpg",
        "release_date": "1991-01-23",
        "title": "Erotic Ghost Story II",
        "video": false,
        "vote_average": 5.2,
        "vote_count": 16
    },
    {
        "adult": false,
        "backdrop_path": "/A34inrFSAIQNatFGc8qP5kfwDmV.jpg",
        "genre_ids": [
            28,
            12,
            18,
            14,
            16
        ],
        "id": 118412,
        "original_language": "ja",
        "original_title": "ベルセルク 黄金時代篇II ドルドレイ攻略",
        "overview": "The Band of the Hawk participates in the Midland war campaign. On the bloody battlefield, they conquer decisive victories that lead them to Doldrey, an old fortress that will decide the outcome of the war.",
        "popularity": 116.283,
        "poster_path": "/gzVQQaDazukAcmiFx6l9WLj1kwo.jpg",
        "release_date": "2012-06-23",
        "title": "Berserk: The Golden Age Arc II - The Battle for Doldrey",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 310
    },
    {
        "adult": false,
        "backdrop_path": "/5wDBVictj4wUYZ31gR5WzCM9dLD.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            878
        ],
        "id": 877269,
        "original_language": "en",
        "original_title": "Strange World",
        "overview": "A journey deep into an uncharted and treacherous land, where fantastical creatures await the legendary Clades—a family of explorers whose differences threaten to topple their latest, and by far most crucial, mission.",
        "popularity": 115.841,
        "poster_path": "/fHMqfsYyl3lskPK2RiFRwhzwuep.jpg",
        "release_date": "2022-11-23",
        "title": "Strange World",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 943
    },
    {
        "adult": false,
        "backdrop_path": "/7dzngS8pLkGJpyeskCFcjPO9qLF.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 245891,
        "original_language": "en",
        "original_title": "John Wick",
        "overview": "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
        "popularity": 115.432,
        "poster_path": "/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg",
        "release_date": "2014-10-22",
        "title": "John Wick",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 17317
    },
    {
        "adult": false,
        "backdrop_path": "/sUuzl04qNIYsnwCLQpZ2RSvXA1V.jpg",
        "genre_ids": [
            35,
            28,
            53
        ],
        "id": 792775,
        "original_language": "is",
        "original_title": "Leynilögga",
        "overview": "When Bússi, Iceland's toughest cop, is forced to work with a new partner to solve a series of bank robberies, the pressure to close the case as soon as possible proves too much for him.",
        "popularity": 115.304,
        "poster_path": "/jnWyZsaCl3Ke6u6ReSmBRO8S1rX.jpg",
        "release_date": "2022-05-23",
        "title": "Cop Secret",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 74
    },
    {
        "adult": false,
        "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
        "genre_ids": [
            28,
            14,
            878
        ],
        "id": 399566,
        "original_language": "en",
        "original_title": "Godzilla vs. Kong",
        "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
        "popularity": 115.273,
        "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
        "release_date": "2021-03-24",
        "title": "Godzilla vs. Kong",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 8789
    },
    {
        "adult": false,
        "backdrop_path": "/d0u1zrbOZJYQZzXYhrG7RhARxSI.jpg",
        "genre_ids": [
            53,
            9648
        ],
        "id": 993621,
        "original_language": "en",
        "original_title": "The Stranger in Our Bed",
        "overview": "A newly married woman leaves her wealthy husband for a lover who mysteriously disappears. Things start to unravel and become life-threatening on a trip to the husband's family estate.",
        "popularity": 114.984,
        "poster_path": "/9bX57QlmpI1DcWLkggGmg5guqJx.jpg",
        "release_date": "2022-08-26",
        "title": "The Stranger in Our Bed",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 27
    },
    {
        "adult": false,
        "backdrop_path": "/muWigu80dbc41sKF51X4Q9ECsic.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            14,
            12
        ],
        "id": 585083,
        "original_language": "en",
        "original_title": "Hotel Transylvania: Transformania",
        "overview": "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
        "popularity": 114.703,
        "poster_path": "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
        "release_date": "2022-02-25",
        "title": "Hotel Transylvania: Transformania",
        "video": false,
        "vote_average": 7,
        "vote_count": 1514
    },
    {
        "adult": false,
        "backdrop_path": "/32GH8Mi4GmTPIQyd6IW1FFrHWrj.jpg",
        "genre_ids": [
            28
        ],
        "id": 965839,
        "original_language": "en",
        "original_title": "Lord of the Streets",
        "overview": "When Jason Dyson refuses to make his prized fighter throw an MMA match, a notorious gangster collects his debt by killing the fighter and kidnapping Jason's daughter. Now he must train a prisoner to endure five consecutive underground fights to save her.",
        "popularity": 114.094,
        "poster_path": "/n9YWVQRc0zw0nwrFcOkOpffZxjc.jpg",
        "release_date": "2022-04-22",
        "title": "Lord of the Streets",
        "video": false,
        "vote_average": 5.2,
        "vote_count": 63
    },
    {
        "adult": false,
        "backdrop_path": "/f8sYAxcM3zRwe4P8cnjKFidq3Jh.jpg",
        "genre_ids": [
            35,
            80
        ],
        "id": 337404,
        "original_language": "en",
        "original_title": "Cruella",
        "overview": "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
        "popularity": 114.077,
        "poster_path": "/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg",
        "release_date": "2021-05-26",
        "title": "Cruella",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 8184
    },
    {
        "adult": false,
        "backdrop_path": "/zxWAv1A34kdYslBi4ekMDtgIGUt.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 566525,
        "original_language": "en",
        "original_title": "Shang-Chi and the Legend of the Ten Rings",
        "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
        "popularity": 113.834,
        "poster_path": "/d08HqqeBQSwN8i8MEvpsZ8Cb438.jpg",
        "release_date": "2021-09-01",
        "title": "Shang-Chi and the Legend of the Ten Rings",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 8043
    },
    {
        "adult": false,
        "backdrop_path": "/xiwHOMJRk24W9820HFSG7wdBuNa.jpg",
        "genre_ids": [
            18,
            27,
            53
        ],
        "id": 931954,
        "original_language": "es",
        "original_title": "Venus",
        "overview": "Lucía, a club dancer on the run, takes refuge in a sinister building on the outskirts of Madrid where her sister Rocío lives with her daughter Alba.",
        "popularity": 113.772,
        "poster_path": "/vyQmDx5CF8x9T6WKCLuoFotGpjf.jpg",
        "release_date": "2022-12-02",
        "title": "Venus",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 87
    },
    {
        "adult": false,
        "backdrop_path": "/eIeCUHk8q7smdd2KAiPBmceN7QS.jpg",
        "genre_ids": [
            35,
            10751,
            10402
        ],
        "id": 830784,
        "original_language": "en",
        "original_title": "Lyle, Lyle, Crocodile",
        "overview": "When the Primm family moves to New York City, their young son Josh struggles to adapt to his new school and new friends. All of that changes when he discovers Lyle — a singing crocodile who loves baths, caviar and great music — living in the attic of his new home. But when Lyle’s existence is threatened by evil neighbor Mr. Grumps, the Primms must band together to show the world that family can come from the most unexpected places.",
        "popularity": 113.019,
        "poster_path": "/irIS5Tn3TXjNi1R9BpWvGAN4CZ1.jpg",
        "release_date": "2022-10-07",
        "title": "Lyle, Lyle, Crocodile",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 411
    },
    {
        "adult": false,
        "backdrop_path": "/rwgmDkIEv8VjAsWx25ottJrFvpO.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 744276,
        "original_language": "en",
        "original_title": "After Ever Happy",
        "overview": "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for.",
        "popularity": 112.806,
        "poster_path": "/6b7swg6DLqXCO3XUsMnv6RwDMW2.jpg",
        "release_date": "2022-08-24",
        "title": "After Ever Happy",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 845
    },
    {
        "adult": false,
        "backdrop_path": "/fVAirPv8lUXhhovZS3MrM2oz9MP.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 105905,
        "original_language": "ja",
        "original_title": "昭和おんなみち　裸性門",
        "overview": "Roman Porno from 1973.",
        "popularity": 112.663,
        "poster_path": "/4HrdA8yAcZef8fw9qstzRz5NiLy.jpg",
        "release_date": "1973-07-04",
        "title": "Naked Rashomon",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 3
    },
    {
        "adult": false,
        "backdrop_path": "/c0rYFlL76pAg6zExn0etOWOofjr.jpg",
        "genre_ids": [
            27
        ],
        "id": 109428,
        "original_language": "en",
        "original_title": "Evil Dead",
        "overview": "Five young friends find the mysterious and fiercely powerful Book of the Dead, and unable to resist its temptation, release a violent demon on a bloodthirsty quest to possess them all.",
        "popularity": 112.507,
        "poster_path": "/1gDV0Lm9y8ufIKzyf0h0GBgb9Zj.jpg",
        "release_date": "2013-04-05",
        "title": "Evil Dead",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 4073
    },
    {
        "adult": false,
        "backdrop_path": "/fTLMsF3IVLMcpNqIqJRweGvVwtX.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 1035806,
        "original_language": "en",
        "original_title": "Detective Knight: Independence",
        "overview": "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
        "popularity": 112.473,
        "poster_path": "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
        "release_date": "2023-01-20",
        "title": "Detective Knight: Independence",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 116
    },
    {
        "adult": false,
        "backdrop_path": "/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 580489,
        "original_language": "en",
        "original_title": "Venom: Let There Be Carnage",
        "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        "popularity": 112.423,
        "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        "release_date": "2021-09-30",
        "title": "Venom: Let There Be Carnage",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 8784
    },
    {
        "adult": false,
        "backdrop_path": "/sE6uilkTOIdg1zbZ3S8UKJ7Q9Av.jpg",
        "genre_ids": [
            18,
            10749,
            28
        ],
        "id": 845659,
        "original_language": "en",
        "original_title": "Perfect Addiction",
        "overview": "A female boxing trainer discovers that her champion cage-fighter boyfriend has been cheating on her with her sister and decides to seek revenge by training up his arch-rival to challenge him.",
        "popularity": 111.922,
        "poster_path": "/3wkrRKMFRwCpjp1U27914oRbcqH.jpg",
        "release_date": "2023-02-16",
        "title": "Perfect Addiction",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 111
    },
    {
        "adult": false,
        "backdrop_path": "/v7GQxa9ZmdMZjt4JwZF54mvAiTv.jpg",
        "genre_ids": [
            28,
            12,
            14,
            16
        ],
        "id": 113082,
        "original_language": "ja",
        "original_title": "ベルセルク 黄金時代篇I 覇王の卵",
        "overview": "Guts, an immensely strong sword-for-hire, has little direction in his life, simply fighting one battle after the next. However, this all changes suddenly when he meets and is bested by Griffith, a beautiful and charismatic young man who leads the Band of the Hawk mercenary army. After Guts joins the Band and the relationship between the two men begins to blossom, Casca, the tough, lone swordswoman in the Band of the Hawk, struggles to accept Guts and the influence he has on the world around her.  While the two men begin to fight together, Griffith continues to rise to power, all seemingly in order to reach his mysterious, prophesied goals. What lengths will Guts and Griffith go to in order to reach these goals, and where will fate take the two men?",
        "popularity": 110.082,
        "poster_path": "/vES8WAzjowrMT8gwnoEaCioZXXk.jpg",
        "release_date": "2012-02-03",
        "title": "Berserk: The Golden Age Arc I - The Egg of the King",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 392
    },
    {
        "adult": false,
        "backdrop_path": "/gnxQpCncPcL8BgjabLQMrBh4Lmj.jpg",
        "genre_ids": [
            18,
            10749,
            53
        ],
        "id": 216015,
        "original_language": "en",
        "original_title": "Fifty Shades of Grey",
        "overview": "When college senior Anastasia Steele steps in for her sick roommate to interview prominent businessman Christian Grey for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him. Though sexually inexperienced, Ana plunges headlong into an affair -- and learns that Christian's true sexual proclivities push the boundaries of pain and pleasure.",
        "popularity": 110.024,
        "poster_path": "/63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg",
        "release_date": "2015-02-11",
        "title": "Fifty Shades of Grey",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 10909
    },
    {
        "adult": false,
        "backdrop_path": "/kpUre8wWSXn3D5RhrMttBZa6w1v.jpg",
        "genre_ids": [
            35,
            10751,
            14
        ],
        "id": 338958,
        "original_language": "en",
        "original_title": "Disenchanted",
        "overview": "Disillusioned with life in the city, feeling out of place in suburbia, and frustrated that her happily ever after hasn’t been so easy to find, Giselle turns to the magic of Andalasia for help. Accidentally transforming the entire town into a real-life fairy tale and placing her family’s future happiness in jeopardy, she must race against time to reverse the spell and determine what happily ever after truly means to her and her family.",
        "popularity": 109.689,
        "poster_path": "/uyNLq2Dc3s4IOdcYTU8ZtM2lTjb.jpg",
        "release_date": "2022-11-18",
        "title": "Disenchanted",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 826
    },
    {
        "adult": false,
        "backdrop_path": "/wxr4Z6E83h14CogsZOzDm1vuDX3.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 91314,
        "original_language": "en",
        "original_title": "Transformers: Age of Extinction",
        "overview": "As humanity picks up the pieces, following the conclusion of \"Transformers: Dark of the Moon,\" Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.",
        "popularity": 109.304,
        "poster_path": "/54HFDOswRfShCr25Tvt7JaLiIaf.jpg",
        "release_date": "2014-06-25",
        "title": "Transformers: Age of Extinction",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 7282
    },
    {
        "adult": false,
        "backdrop_path": "/9nMKJtMuhB6wiLaGLxnmTCD6g3m.jpg",
        "genre_ids": [
            12,
            28,
            53
        ],
        "id": 370172,
        "original_language": "en",
        "original_title": "No Time to Die",
        "overview": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        "popularity": 109.073,
        "poster_path": "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
        "release_date": "2021-09-29",
        "title": "No Time to Die",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 5215
    },
    {
        "adult": false,
        "backdrop_path": "/hu2K1XlEyRjO2JvzIHBa6cPQRAi.jpg",
        "genre_ids": [
            9648,
            53
        ],
        "id": 989473,
        "original_language": "en",
        "original_title": "Invitation to a Murder",
        "overview": "1934. South of England. For no apparent reason and like five other unrelated people, Miranda, a 28-year-old florist, is invited for the weekend in the mansion of billionaire Lewis Findley",
        "popularity": 108.447,
        "poster_path": "/8OyzvMrVx2tXjyJiE3GZpvaXE2T.jpg",
        "release_date": "2023-05-05",
        "title": "Invitation to a Murder",
        "video": false,
        "vote_average": 6,
        "vote_count": 21
    },
    {
        "adult": false,
        "backdrop_path": "/xHRabofjmMGoIV3mb6xgy4nwOcS.jpg",
        "genre_ids": [
            27
        ],
        "id": 801071,
        "original_language": "en",
        "original_title": "The Jack in the Box: Awakening",
        "overview": "When a vintage Jack-in-the-box is opened by a dying woman, she enters into a deal with the demon within that would see her illness cured in return for helping it claim six innocent victims.",
        "popularity": 107.992,
        "poster_path": "/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg",
        "release_date": "2022-02-24",
        "title": "The Jack in the Box: Awakening",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 277
    },
    {
        "adult": false,
        "backdrop_path": "/6lH45J5iprKRcgsL6QVJvkBPdYz.jpg",
        "genre_ids": [
            18
        ],
        "id": 964913,
        "original_language": "en",
        "original_title": "Acidman",
        "overview": "After a decade apart, Maggie tracks down her elusive father. His fixation with UFOs has intensified over the years, which frustrates her attempts to communicate some big news.",
        "popularity": 107.544,
        "poster_path": "/qzd14POdi80yv6kQ7w4vHAGPGF5.jpg",
        "release_date": "2023-03-31",
        "title": "Acidman",
        "video": false,
        "vote_average": 5.7,
        "vote_count": 3
    },
    {
        "adult": false,
        "backdrop_path": "/4w2uPtIo0lFSnQnWg0zVAqPJCLP.jpg",
        "genre_ids": [
            16,
            10751,
            14
        ],
        "id": 10144,
        "original_language": "en",
        "original_title": "The Little Mermaid",
        "overview": "This colorful adventure tells the story of an impetuous mermaid princess named Ariel who falls in love with the very human Prince Eric and puts everything on the line for the chance to be with him. Memorable songs and characters -- including the villainous sea witch Ursula.",
        "popularity": 106.386,
        "poster_path": "/plcZXvI310FkbwIptvd6rqk63LP.jpg",
        "release_date": "1989-11-17",
        "title": "The Little Mermaid",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 6995
    },
    {
        "adult": false,
        "backdrop_path": "/fStC0dSCRQslE9NzXa36EyOom81.jpg",
        "genre_ids": [
            16,
            10751,
            878
        ],
        "id": 728754,
        "original_language": "ja",
        "original_title": "STAND BY ME ドラえもん2",
        "overview": "Nobita travels to the future to show his beloved grandma his bride, but adult Nobita has fled his own wedding.",
        "popularity": 105.992,
        "poster_path": "/vBv8iOFPLnXmtELUjcFc7OKHsR4.jpg",
        "release_date": "2020-11-20",
        "title": "Stand by Me Doraemon 2",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 141
    },
    {
        "adult": false,
        "backdrop_path": "/eKYX2Mz8XYzdwAKSEaIH22RO6nt.jpg",
        "genre_ids": [
            27,
            18,
            53
        ],
        "id": 112355,
        "original_language": "it",
        "original_title": "La tua presenza nuda!",
        "overview": "A wealthy author's second wife begins to suspect that her 12-year old stepson may have murdered his mother, who mysteriously died in a bathtub accident.",
        "popularity": 105.6,
        "poster_path": "/AcKzXVEhxsp1L7XWZ45z9zfraT8.jpg",
        "release_date": "1972-10-14",
        "title": "What the Peeper Saw",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 31
    },
    {
        "adult": false,
        "backdrop_path": "/dvHKdXijoN1OEzGcPhd0eRvkfMd.jpg",
        "genre_ids": [
            27,
            53,
            28,
            12
        ],
        "id": 960258,
        "original_language": "en",
        "original_title": "Shark Bait",
        "overview": "A group of friends enjoying a weekend steal a couple of jetskis racing them out to sea, ending up in a horrific head-on collision. They struggle to find a way home with a badly injured friend while from the waters below predators lurk.",
        "popularity": 105.595,
        "poster_path": "/bVUgMgVozyFScDM3quP412kXrT.jpg",
        "release_date": "2022-05-13",
        "title": "Shark Bait",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 235
    },
    {
        "adult": false,
        "backdrop_path": "/21ldFAokKVjwzi1SHXoPb5gc7md.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 760104,
        "original_language": "en",
        "original_title": "X",
        "overview": "A group of actors sets out to make an adult film in rural Texas under the noses of their reclusive hosts, but when the elderly couple catches their young guests in the act, the cast finds themselves in a desperate fight for their lives.",
        "popularity": 105.408,
        "poster_path": "/woTQx9Q4b8aO13jR9dsj8C9JESy.jpg",
        "release_date": "2022-03-17",
        "title": "X",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 1936
    },
    {
        "adult": false,
        "backdrop_path": "/rshlQ6LfPRSWFhpGL4s5ZkIPR51.jpg",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "id": 324786,
        "original_language": "en",
        "original_title": "Hacksaw Ridge",
        "overview": "WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.",
        "popularity": 105.065,
        "poster_path": "/jhWbYeUNOA5zAb6ufK6pXQFXqTX.jpg",
        "release_date": "2016-10-07",
        "title": "Hacksaw Ridge",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 12238
    },
    {
        "adult": false,
        "backdrop_path": "/pr5B7Hb7711QQDirAyS5P7fKjts.jpg",
        "genre_ids": [
            53,
            28,
            27,
            12,
            18
        ],
        "id": 760741,
        "original_language": "en",
        "original_title": "Beast",
        "overview": "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
        "popularity": 104.832,
        "poster_path": "/f18rGcLlawKjNC5KRh36S0mvRlY.jpg",
        "release_date": "2022-08-11",
        "title": "Beast",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 1098
    },
    {
        "adult": false,
        "backdrop_path": "/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg",
        "genre_ids": [
            80,
            18,
            35
        ],
        "id": 106646,
        "original_language": "en",
        "original_title": "The Wolf of Wall Street",
        "overview": "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
        "popularity": 104.827,
        "poster_path": "/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
        "release_date": "2013-12-25",
        "title": "The Wolf of Wall Street",
        "video": false,
        "vote_average": 8,
        "vote_count": 21564
    },
    {
        "adult": false,
        "backdrop_path": "/4uij4drUitClyXihCyQJSklXvvv.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 876797,
        "original_language": "ja",
        "original_title": "余命10年",
        "overview": "The 20-year-old heroine learns that she only has 10 years to live due to an incurable disease of 1 in tens of thousands. She decided not to fall in love and not to be obsessed with living. But then, she met the hero at a local alumni association.",
        "popularity": 104.577,
        "poster_path": "/yJFUBE5VGjQaTLuyhf4Hb926mn4.jpg",
        "release_date": "2022-03-04",
        "title": "The Last 10 Years",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 28
    },
    {
        "adult": false,
        "backdrop_path": "/hraytJBd1Ztcp7k9So4zLFcgsyh.jpg",
        "genre_ids": [
            99
        ],
        "id": 1040603,
        "original_language": "en",
        "original_title": "Orgasm Inc: The Story of OneTaste",
        "overview": "A sexual wellness company gains fame and followers, then members come forward with shocking allegations.",
        "popularity": 103.634,
        "poster_path": "/yqI3XQ1nmvxFpBus1BescRrRBAj.jpg",
        "release_date": "2022-11-05",
        "title": "Orgasm Inc: The Story of OneTaste",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 57
    },
    {
        "adult": false,
        "backdrop_path": "/1KPzVlcqWL9MS1b83mYSSkXIp5y.jpg",
        "genre_ids": [
            28,
            16,
            12,
            35,
            14
        ],
        "id": 290271,
        "original_language": "ja",
        "original_title": "ONE PIECE “3D2Y” エースの死を越えて! ルフィ仲間との誓い",
        "overview": "The special takes place during the two year before the Straw Hats reunite on Sabody.  Luffy is currently in Rusukaina training to get stronger to take on the New World. However the training  is interrupted when Hancock's sisters, Marigold and Sandersonia, are kidnapped by the Byrnndi World,  a pirate who was locked away on Level 6 of Impel Down but escaped during Luffy's invasion to save Ace,  in order to lure Hancock to him and use her as a hostage against the World Government due to her  Shichibukai status. Thus Luffy and Hancock head off to confront him and save Hancock's sisters.",
        "popularity": 103.488,
        "poster_path": "/caUI7YlhVXykFWQ7Ul7RQ2wQRpv.jpg",
        "release_date": "2014-12-31",
        "title": "One Piece \"3D2Y\": Overcome Ace's Death! Luffy's Vow to his Friends",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 101
    },
    {
        "adult": false,
        "backdrop_path": "/kyeqDT2cFhTmwlvtuQY3n2W6Vf3.jpg",
        "genre_ids": [
            28,
            53,
            12,
            27
        ],
        "id": 799379,
        "original_language": "ko",
        "original_title": "늑대사냥",
        "overview": "While under heavily armed guard, the dangerous convicts aboard a cargo ship unite in a coordinated escape attempt that soon escalates into a bloody, all-out riot. But as the fugitives continue their brutal campaign of terror, they soon discover that not even the most vicious among them is safe from the horror they unknowingly unleashed from the darkness below deck.",
        "popularity": 103.144,
        "poster_path": "/dniWicB6fa7NvpGbguxWlNPMc5f.jpg",
        "release_date": "2022-09-21",
        "title": "Project Wolf Hunting",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 129
    },
    {
        "adult": false,
        "backdrop_path": "/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 337167,
        "original_language": "en",
        "original_title": "Fifty Shades Freed",
        "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
        "popularity": 102.898,
        "poster_path": "/9ZedQHPQVveaIYmDSTazhT3y273.jpg",
        "release_date": "2018-01-17",
        "title": "Fifty Shades Freed",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 7354
    },
    {
        "adult": false,
        "backdrop_path": "/8QpzqK3nPGxpqpKqhe6QasTGBWQ.jpg",
        "genre_ids": [
            878,
            12,
            28
        ],
        "id": 406759,
        "original_language": "en",
        "original_title": "Moonfall",
        "overview": "A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.",
        "popularity": 102.511,
        "poster_path": "/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
        "release_date": "2022-02-03",
        "title": "Moonfall",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 2408
    },
    {
        "adult": false,
        "backdrop_path": "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
        "genre_ids": [
            12,
            14
        ],
        "id": 671,
        "original_language": "en",
        "original_title": "Harry Potter and the Philosopher's Stone",
        "overview": "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.",
        "popularity": 102.437,
        "poster_path": "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
        "release_date": "2001-11-16",
        "title": "Harry Potter and the Philosopher's Stone",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 24742
    },
    {
        "adult": false,
        "backdrop_path": "/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",
        "genre_ids": [
            28,
            35,
            12
        ],
        "id": 739405,
        "original_language": "en",
        "original_title": "Operation Fortune: Ruse de Guerre",
        "overview": "Special agent Orson Fortune and his team of operatives recruit one of Hollywood's biggest movie stars to help them on an undercover mission when the sale of a deadly new weapons technology threatens to disrupt the world order.",
        "popularity": 102.411,
        "poster_path": "/uo7vWfQUlVwueYTDRicXOJa8Oow.jpg",
        "release_date": "2023-01-04",
        "title": "Operation Fortune: Ruse de Guerre",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 712
    },
    {
        "adult": false,
        "backdrop_path": "/6z7SsvTdRrzoxTPHYEb5UuFZj5u.jpg",
        "genre_ids": [
            18,
            12,
            35,
            10749
        ],
        "id": 45491,
        "original_language": "cn",
        "original_title": "玉蒲團之偷情寶鑑",
        "overview": "A recently married scholar goes on a quest for knowledge of other people's wives, based on his philosophical differences with the Sack Monk. He encounters the Flying Thief, who agrees to help him find women, but only if he attains a penis as big as a horse's. The scholar has a surgeon attach said unit, and he's off and running on his mission, only to find that there are obstacles to his new lifestyle, such as jealous husbands and treacherous females.",
        "popularity": 101.535,
        "poster_path": "/tQMf9iPeCsrkeSXxkNKtY1R82mx.jpg",
        "release_date": "1991-11-30",
        "title": "Sex and Zen",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 54
    },
    {
        "adult": false,
        "backdrop_path": "/zh1M8fE2vQ0BKxYzIvMYan7ryV.jpg",
        "genre_ids": [
            878,
            18,
            53,
            27
        ],
        "id": 549294,
        "original_language": "en",
        "original_title": "Synchronic",
        "overview": "Two New Orleans paramedics' lives are ripped apart after encountering a series of horrific deaths linked to a designer drug with bizarre, otherworldly effects.",
        "popularity": 101.362,
        "poster_path": "/wgm4gdJwb7iSYX0uBsRAZmHQmPm.jpg",
        "release_date": "2020-10-23",
        "title": "Synchronic",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 688
    },
    {
        "adult": false,
        "backdrop_path": "/tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg",
        "genre_ids": [
            14
        ],
        "id": 779782,
        "original_language": "en",
        "original_title": "The School for Good and Evil",
        "overview": "Best friends Sophie and Agatha navigate an enchanted school for young heroes and villains — and find themselves on opposing sides of the battle between good and evil.",
        "popularity": 101.018,
        "poster_path": "/6oZeEu1GDILdwezmZ5e2xWISf1C.jpg",
        "release_date": "2022-10-19",
        "title": "The School for Good and Evil",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 956
    },
    {
        "adult": false,
        "backdrop_path": "/9irF0UfKK45ZHyE7p3aTiTVfoMw.jpg",
        "genre_ids": [
            9648,
            53,
            27
        ],
        "id": 782936,
        "original_language": "en",
        "original_title": "Nocebo",
        "overview": "A fashion designer hires a nanny from the Philippines to assist her in caring for her family while she is suffering from what she believes is a tick-related illness. The nanny uses traditional Filipino folk healing techniques to help her, but in the process of doing so, she uncovers a horrifying truth about why she is there and why her employer is actually sick.",
        "popularity": 100.782,
        "poster_path": "/3FPnDTlX0LsaU4VD5mc82BMbchA.jpg",
        "release_date": "2022-11-03",
        "title": "Nocebo",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 77
    },
    {
        "adult": false,
        "backdrop_path": "/zBG5Mg29NH9xxpWMMG7BIvKwYhL.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 829557,
        "original_language": "pl",
        "original_title": "365 Days: This Day",
        "overview": "Laura and Massimo are back and hotter than ever. But the reunited couple's new beginning is complicated by Massimo’s family ties and a mysterious man who enters Laura’s life to win her heart and trust, at any cost.",
        "popularity": 100.578,
        "poster_path": "/7qU0SOVcQ8BTJLodcAlulUAG16C.jpg",
        "release_date": "2022-04-27",
        "title": "365 Days: This Day",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 1109
    },
    {
        "adult": false,
        "backdrop_path": "/cL0cdccOMzM508ODsWPfHVMMAzo.jpg",
        "genre_ids": [
            28,
            9648,
            53
        ],
        "id": 267805,
        "original_language": "en",
        "original_title": "There Are No Saints",
        "overview": "A man is imprisoned for a crime he didn't commit. When his wife is murdered and his son kidnapped and taken to Mexico, he devises an elaborate and dangerous plan to rescue his son and avenge the murder.",
        "popularity": 100.441,
        "poster_path": "/fcOTYArjKuAgufwHoTvx8w9UKCv.jpg",
        "release_date": "2022-05-27",
        "title": "There Are No Saints",
        "video": false,
        "vote_average": 5.3,
        "vote_count": 89
    },
    {
        "adult": false,
        "backdrop_path": "/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 756999,
        "original_language": "en",
        "original_title": "The Black Phone",
        "overview": "Finney Blake, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
        "popularity": 100.163,
        "poster_path": "/lr11mCT85T1JanlgjMuhs9nMht4.jpg",
        "release_date": "2022-06-22",
        "title": "The Black Phone",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 3849
    },
    {
        "adult": false,
        "backdrop_path": "/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 24428,
        "original_language": "en",
        "original_title": "The Avengers",
        "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
        "popularity": 99.992,
        "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        "release_date": "2012-04-25",
        "title": "The Avengers",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 28574
    },
    {
        "adult": false,
        "backdrop_path": "/urDWNffjwmNi5IQaezw9GwqkUXa.jpg",
        "genre_ids": [
            12,
            14
        ],
        "id": 767,
        "original_language": "en",
        "original_title": "Harry Potter and the Half-Blood Prince",
        "overview": "As Lord Voldemort tightens his grip on both the Muggle and wizarding worlds, Hogwarts is no longer a safe haven. Harry suspects perils may even lie within the castle, but Dumbledore is more intent upon preparing him for the final battle fast approaching. Together they work to find the key to unlock Voldemorts defenses and to this end, Dumbledore recruits his old friend and colleague Horace Slughorn, whom he believes holds crucial information. Even as the decisive showdown looms, romance blossoms for Harry, Ron, Hermione and their classmates. Love is in the air, but danger lies ahead and Hogwarts may never be the same again.",
        "popularity": 99.762,
        "poster_path": "/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
        "release_date": "2009-07-07",
        "title": "Harry Potter and the Half-Blood Prince",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 17656
    },
    {
        "adult": false,
        "backdrop_path": "/kZ7unRnWe8UwpJsc1n5venXr9u2.jpg",
        "genre_ids": [
            18,
            28
        ],
        "id": 619329,
        "original_language": "ta",
        "original_title": "முந்திரிக்காடு",
        "overview": "In a Village Where they used to Honor Kill Love couples of the opposite cast and in that village A girl and boy from the opposite cast who used to be friends are getting pressure from village people that they love each other . What happens at the End?\r Whether they succeed or not is the story.",
        "popularity": 99.581,
        "poster_path": "/k7iEwxmphkr1bwb66CHA4dhyyBF.jpg",
        "release_date": "2023-04-07",
        "title": "Munthiri Kaadu",
        "video": false,
        "vote_average": 4.3,
        "vote_count": 3
    },
    {
        "adult": false,
        "backdrop_path": "/c7VbRPlev1bRfKvTxr98erw5T7B.jpg",
        "genre_ids": [
            16,
            35,
            10751
        ],
        "id": 585,
        "original_language": "en",
        "original_title": "Monsters, Inc.",
        "overview": "James Sullivan and Mike Wazowski are monsters, they earn their living scaring children and are the best in the business... even though they're more afraid of the children than they are of them. When a child accidentally enters their world, James and Mike suddenly find that kids are not to be afraid of and they uncover a conspiracy that could threaten all children across the world.",
        "popularity": 99.502,
        "poster_path": "/sgheSKxZkttIe8ONsf2sWXPgip3.jpg",
        "release_date": "2001-11-01",
        "title": "Monsters, Inc.",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 16750
    },
    {
        "adult": false,
        "backdrop_path": "/f9PSbuMeBS5CuHEOVyymg5lcq8J.jpg",
        "genre_ids": [
            28,
            53,
            9648,
            80,
            27
        ],
        "id": 996727,
        "original_language": "en",
        "original_title": "The Price We Pay",
        "overview": "After a pawn shop robbery goes askew, two criminals take refuge at a remote farmhouse to try to let the heat die down, but find something much more menacing.",
        "popularity": 99.149,
        "poster_path": "/8fwJt0qZieQ7dKaiiqehObWpXYT.jpg",
        "release_date": "2023-01-13",
        "title": "The Price We Pay",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 113
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            18
        ],
        "id": 677118,
        "original_language": "ko",
        "original_title": "오르가즘 특강 2",
        "overview": "Yuner, Liu Ren, and Zhou Xian are college girlfriends. They went to the holiday house to take pictures and swim together during the holidays. However, the three women soon became bored. Yuner came up with the idea of seducing men and happened to encounter a handsome sports car The passing Shi Yu and the senior asked the three women for directions, and Yuner handed over the phone number to the two men, and this extraordinary experience began …",
        "popularity": 98.97,
        "poster_path": "/gYSJi5avO0RmzrX9ZbKwM7ZMkng.jpg",
        "release_date": "2020-02-20",
        "title": "Orgasm Lecture 2",
        "video": false,
        "vote_average": 10,
        "vote_count": 1
    },
    {
        "adult": false,
        "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
        "genre_ids": [
            28,
            12,
            35
        ],
        "id": 752623,
        "original_language": "en",
        "original_title": "The Lost City",
        "overview": "Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to the ancient city's lost treasure that featured in her latest story. Alan, determined to prove he can be a hero in real life and not just on the pages of her books, sets off to rescue her.",
        "popularity": 98.881,
        "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
        "release_date": "2022-03-24",
        "title": "The Lost City",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 2738
    },
    {
        "adult": false,
        "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 760161,
        "original_language": "en",
        "original_title": "Orphan: First Kill",
        "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
        "popularity": 98.781,
        "poster_path": "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
        "release_date": "2022-07-27",
        "title": "Orphan: First Kill",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 1696
    },
    {
        "adult": false,
        "backdrop_path": "/ghsPsvM0sEztdNT4kUlTsBF2LEF.jpg",
        "genre_ids": [
            18
        ],
        "id": 852046,
        "original_language": "fr",
        "original_title": "Athena",
        "overview": "Hours after the tragic death of their youngest brother in unexplained circumstances, three siblings have their lives thrown into chaos.",
        "popularity": 98.676,
        "poster_path": "/s8B0GsFEebd0DW2spykLMxnc1Kn.jpg",
        "release_date": "2022-09-09",
        "title": "Athena",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 550
    },
    {
        "adult": false,
        "backdrop_path": "/d3l7kgFJyLTTQSrR4ysCk5yeVyW.jpg",
        "genre_ids": [
            28,
            18
        ],
        "id": 579974,
        "original_language": "te",
        "original_title": "రౌద్రం రణం రుధిరం",
        "overview": "A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.",
        "popularity": 98.267,
        "poster_path": "/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg",
        "release_date": "2022-03-24",
        "title": "RRR",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 931
    },
    {
        "adult": false,
        "backdrop_path": "/lRFDTddGLYAb23TbpagJXpbDt5C.jpg",
        "genre_ids": [
            16,
            12,
            35
        ],
        "id": 946700,
        "original_language": "eu",
        "original_title": "Orkestra Lurtarra",
        "overview": "Manu fell in love with the pianist Stella Panini when he was a child and it's been his dream to meet her ever since. To achieve his dream he follows the advice of Stefano Salegi, a shady character who becomes his manager and forms a band. But, not just an energetic dreamer, Manu is an outsider with problems finding his place in society. That's clear by the instrument he's chosen —none other than the broom—  that he uses to make music and carry the rhythm. That won't keep him from starting a band completely sui generis that breaks all the clichés.",
        "popularity": 97.827,
        "poster_path": "/pYNQFBwLRMrulCYE59aMmPZl4Ma.jpg",
        "release_date": "2022-04-08",
        "title": "Orkestra Lurtarra",
        "video": false,
        "vote_average": 4.9,
        "vote_count": 7
    },
    {
        "adult": false,
        "backdrop_path": "/wQiXDEzfU8pydakr5yZ01bhlN30.jpg",
        "genre_ids": [
            99
        ],
        "id": 1058699,
        "original_language": "en",
        "original_title": "STILL: A Michael J. Fox Movie",
        "overview": "A short kid from a Canadian army base becomes the international pop culture darling of the 1980s—only to find the course of his life altered by a stunning diagnosis. What happens when an incurable optimist confronts an incurable disease?",
        "popularity": 97.748,
        "poster_path": "/fDO4gYZxvdsIrHKzsSAbc3N7Wfg.jpg",
        "release_date": "2023-01-20",
        "title": "STILL: A Michael J. Fox Movie",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 26
    },
    {
        "adult": false,
        "backdrop_path": "/b1L7qevxiVpkVFq4dmdQPGFPWH0.jpg",
        "genre_ids": [
            27
        ],
        "id": 836225,
        "original_language": "en",
        "original_title": "The Exorcism of God",
        "overview": "An American priest working in Mexico is considered a saint by many local parishioners. However, due to a botched exorcism, he carries a secret that’s eating him alive until he gets an opportunity to face his demon one final time.",
        "popularity": 97.542,
        "poster_path": "/9X9wKbF0ED1AQpgIkvq0MG4Y4wi.jpg",
        "release_date": "2022-03-11",
        "title": "The Exorcism of God",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 814
    },
    {
        "adult": false,
        "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 238,
        "original_language": "en",
        "original_title": "The Godfather",
        "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        "popularity": 97.406,
        "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "release_date": "1972-03-14",
        "title": "The Godfather",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 17914
    },
    {
        "adult": false,
        "backdrop_path": "/lOOEU6yxnTq6UFgkAOgeW9i3DuR.jpg",
        "genre_ids": [
            18
        ],
        "id": 580116,
        "original_language": "ja",
        "original_title": "ザ・レイプ",
        "overview": "Yahagi Michiko is accosted and raped walking home one evening. From there she maneuvers the logistics of the police, hospital, and criminal justice system while balancing her home life including romantic relationships.",
        "popularity": 97.044,
        "poster_path": "/kY6gWfEJMjJ0JSvDkBuOCB3U6v0.jpg",
        "release_date": "1982-05-15",
        "title": "The Rape",
        "video": false,
        "vote_average": 3.5,
        "vote_count": 5
    },
    {
        "adult": false,
        "backdrop_path": "/3xvdNyZ9WsVJpyeGhm85fukeZz4.jpg",
        "genre_ids": [
            878,
            9648,
            53
        ],
        "id": 1001835,
        "original_language": "en",
        "original_title": "Wifelike",
        "overview": "A grieving detective in the near-future hunts down criminals who trade artificial humans on the black market. In the fight to end AI exploitation, an underground resistance attempts to infiltrate him by sabotaging the programming of the artificial human assigned as his companion to behave like his late wife. She begins to question her reality as memories of a past life begin to surface in a world where nothing is as it seems.",
        "popularity": 96.534,
        "poster_path": "/tea2gDZPxw0wfKC2S2VRWHagtt4.jpg",
        "release_date": "2022-08-12",
        "title": "Wifelike",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 134
    },
    {
        "adult": false,
        "backdrop_path": "/bblKpucB0XbyQBmfXsaRN985Rgh.jpg",
        "genre_ids": [
            18
        ],
        "id": 458220,
        "original_language": "en",
        "original_title": "Palmer",
        "overview": "After 12 years in prison, former high school football star Eddie Palmer returns home to put his life back together—and forms an unlikely bond with Sam, an outcast boy from a troubled home. But Eddie's past threatens to ruin his new life and family.",
        "popularity": 96.46,
        "poster_path": "/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg",
        "release_date": "2021-01-29",
        "title": "Palmer",
        "video": false,
        "vote_average": 8,
        "vote_count": 979
    },
    {
        "adult": false,
        "backdrop_path": "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
        "genre_ids": [
            14,
            12,
            10751
        ],
        "id": 338953,
        "original_language": "en",
        "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
        "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
        "popularity": 95.203,
        "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
        "release_date": "2022-04-06",
        "title": "Fantastic Beasts: The Secrets of Dumbledore",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 3535
    },
    {
        "adult": false,
        "backdrop_path": "/mzFlwK2WN5KGCgEc4ExJmooJy97.jpg",
        "genre_ids": [
            16,
            28,
            10751,
            35,
            878
        ],
        "id": 539681,
        "original_language": "en",
        "original_title": "DC League of Super-Pets",
        "overview": "When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.",
        "popularity": 95.102,
        "poster_path": "/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
        "release_date": "2022-07-27",
        "title": "DC League of Super-Pets",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 1222
    },
    {
        "adult": false,
        "backdrop_path": "/tUBN1paMQ1tmVA5Sjy1ZjPWVsiF.jpg",
        "genre_ids": [
            16,
            12,
            10751,
            35,
            14
        ],
        "id": 676701,
        "original_language": "es",
        "original_title": "Tadeo Jones 3: La Tabla Esmeralda",
        "overview": "Tad accidentally unleashes an ancient spell, endangering the lives of his friends Mummy, Jeff, and Belzoni. With everyone against him and only helped by Sara, he sets off on an adventure to end the Curse of the Mummy.",
        "popularity": 94.728,
        "poster_path": "/jvIVl8zdNSOAJImw1elQEzxStMN.jpg",
        "release_date": "2022-08-24",
        "title": "Tad, the Lost Explorer and the Emerald Tablet",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 240
    },
    {
        "adult": false,
        "backdrop_path": "/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
        "genre_ids": [
            878,
            12
        ],
        "id": 438631,
        "original_language": "en",
        "original_title": "Dune",
        "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
        "popularity": 94.643,
        "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "release_date": "2021-09-15",
        "title": "Dune",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 8829
    },
    {
        "adult": false,
        "backdrop_path": "/96SADhPnkXnVN3KaRKsDeBovLcm.jpg",
        "genre_ids": [
            28,
            14,
            10770
        ],
        "id": 877703,
        "original_language": "en",
        "original_title": "Teen Wolf: The Movie",
        "overview": "The wolves are howling once again, as a terrifying ancient evil emerges in Beacon Hills. Scott McCall, no longer a teenager yet still an Alpha, must gather new allies and reunite trusted friends to fight back against this powerful and deadly enemy.",
        "popularity": 94.399,
        "poster_path": "/wAkpPm3wcHRqZl8XjUI3Y2chYq2.jpg",
        "release_date": "2023-01-18",
        "title": "Teen Wolf: The Movie",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 605
    },
    {
        "adult": false,
        "backdrop_path": "/68t9YraLbv4BHikPmjcw7SOPJi3.jpg",
        "genre_ids": [
            53,
            9648
        ],
        "id": 916605,
        "original_language": "en",
        "original_title": "The Infernal Machine",
        "overview": "Reclusive and controversial author Bruce Cogburn is drawn out of hiding by an obsessive fan, forcing the novelist to confront a past that he thought he could escape, and to account for events set in motion by his bestseller decades earlier. Cogburn's search for who is behind the manipulation and mental torment he encounters leads to an emotional roller-coaster ride full of fear and danger, where things are not always as clear as they seem to be, and where past deeds can have dire consequences.",
        "popularity": 94.206,
        "poster_path": "/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg",
        "release_date": "2022-09-23",
        "title": "The Infernal Machine",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 184
    },
    {
        "adult": false,
        "backdrop_path": "/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg",
        "genre_ids": [
            16,
            35,
            14,
            12,
            10751
        ],
        "id": 508943,
        "original_language": "en",
        "original_title": "Luca",
        "overview": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
        "popularity": 94.165,
        "poster_path": "/8tABCBpzu3mZbzMB3sRzMEHEvJi.jpg",
        "release_date": "2021-06-17",
        "title": "Luca",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 7280
    },
    {
        "adult": false,
        "backdrop_path": "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 524434,
        "original_language": "en",
        "original_title": "Eternals",
        "overview": "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
        "popularity": 93.719,
        "poster_path": "/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
        "release_date": "2021-11-03",
        "title": "Eternals",
        "video": false,
        "vote_average": 7,
        "vote_count": 7122
    },
    {
        "adult": false,
        "backdrop_path": "/xgDj56UWyeWQcxQ44f5A3RTWuSs.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            14
        ],
        "id": 2062,
        "original_language": "en",
        "original_title": "Ratatouille",
        "overview": "Remy, a resident of Paris, appreciates good food and has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart's delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris' finest restaurants, the rodent gourmet finds himself ideally placed to realize his dream.",
        "popularity": 93.544,
        "poster_path": "/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
        "release_date": "2007-06-28",
        "title": "Ratatouille",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 15250
    },
    {
        "adult": false,
        "backdrop_path": "/wYYVBBK3O8sb7J4WxkRx1bI7Q8c.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 697843,
        "original_language": "en",
        "original_title": "Extraction 2",
        "overview": "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Sydney, in order to get revenge.",
        "popularity": 93.526,
        "poster_path": "/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
        "release_date": "2023-06-09",
        "title": "Extraction 2",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/uykAWcuO098mKJSPxhyW5a25ZT0.jpg",
        "genre_ids": [
            53,
            18
        ],
        "id": 143310,
        "original_language": "ja",
        "original_title": "花と蛇　白衣縄奴隷",
        "overview": "A perverted dentist (and dental assistant) that likes to sleep with his patients, gets obsessed with one in particular who also happens to be a lesbian. He uses everthing he can think of to abuse this woman and her female lover. Ropes/Dental tools/Ice Buckets/Candles/ (the works) and sometimes he sets the mood with something from his classical music record collection.",
        "popularity": 93.515,
        "poster_path": "/tIsSeK3NqCceMXnGPyeweQrJiuS.jpg",
        "release_date": "1986-12-06",
        "title": "Flower and Snake 4: White Uniform Rope Slave",
        "video": false,
        "vote_average": 5.4,
        "vote_count": 14
    },
    {
        "adult": false,
        "backdrop_path": "/6rax7iv5yQtldc3ApEvrheJf8uw.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            14
        ],
        "id": 751741,
        "original_language": "en",
        "original_title": "Night at the Museum: Kahmunrah Rises Again",
        "overview": "Nick Daley is following in his father's footsteps as night watchman at the American Museum of Natural History, so he knows what happens when the sun goes down. But when the maniacal ruler Kahmunrah escapes, it is up to Nick to save the museum once and for all.",
        "popularity": 93.385,
        "poster_path": "/mkRQn520JQD07BNP03NK3iKCaPD.jpg",
        "release_date": "2022-12-09",
        "title": "Night at the Museum: Kahmunrah Rises Again",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 199
    },
    {
        "adult": false,
        "backdrop_path": "/odBSDNyi5J6Sed2Xu3QKTtEAIzN.jpg",
        "genre_ids": [
            28,
            16,
            14
        ],
        "id": 287590,
        "original_language": "ja",
        "original_title": "聖闘士星矢 LEGEND of SANCTUARY",
        "overview": "Warriors called \"Saints\" are the champions of hope who have always appeared since the Age of Myth whenever evil threatens the world. In this present day story, many years since the long fought \"Holy War\" we find Saori Kido, a girl troubled by her mysterious powers. She is saved by a boy, Seiya \"Bronze Saint\" from a sudden attack by an assassin, through the accident Saori realizes her destiny and mission and decides to go to \"Sanctuary\" with Seiya and his company of Bronze Saints. In Sanctuary they confront \"Pope\" and wage a desperate battle against the greatest Saints, the \"Gold Saints\".",
        "popularity": 93.355,
        "poster_path": "/gxKfP9278RK4t3J8vLXoFfB8ihl.jpg",
        "release_date": "2014-06-21",
        "title": "Saint Seiya: Legend of Sanctuary",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 593
    },
    {
        "adult": false,
        "backdrop_path": "/dAzuZIIZVehzJBWBXvHoglArMDG.jpg",
        "genre_ids": [
            878,
            12,
            53
        ],
        "id": 131631,
        "original_language": "en",
        "original_title": "The Hunger Games: Mockingjay - Part 1",
        "overview": "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
        "popularity": 92.722,
        "poster_path": "/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
        "release_date": "2014-11-19",
        "title": "The Hunger Games: Mockingjay - Part 1",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 14388
    },
    {
        "adult": false,
        "backdrop_path": "/tX9UkyaW1jlC2Khj8H1imaPGzRV.jpg",
        "genre_ids": [
            10749
        ],
        "id": 652574,
        "original_language": "ko",
        "original_title": "친구부부",
        "overview": "Sin-wook and Dong-soo have been friends since they were kids. Sin-wook and his wife swap partners with Dong-soo and his wife. They start playing Strip Go Stop and the game gets serious. The four of them have sex, but they end up falling for each others' wives and husbands and even meet in secret. One day, when their sex life reaches its peak, Sin-wook's wife, Yeon-hee, gets pregnant, not knowing whose baby it is. Her relationship with Sin-wook is on thin ice and then the baby is born. They do a DNA test to find out who the father is.",
        "popularity": 92.665,
        "poster_path": "/vk1vD1F4V8bN0Tz8Z4iVy0OtgoL.jpg",
        "release_date": "2019-11-10",
        "title": "Swingers Party with My Friend",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 6
    },
    {
        "adult": false,
        "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        "genre_ids": [
            12,
            878,
            28
        ],
        "id": 299534,
        "original_language": "en",
        "original_title": "Avengers: Endgame",
        "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        "popularity": 92.452,
        "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        "release_date": "2019-04-24",
        "title": "Avengers: Endgame",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 23137
    },
    {
        "adult": false,
        "backdrop_path": "/oCKZAdUROqdlTcUOstqJ1gM8JQt.jpg",
        "genre_ids": [
            18,
            35
        ],
        "id": 615777,
        "original_language": "en",
        "original_title": "Babylon",
        "overview": "A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films and to sound films in the late 1920s.",
        "popularity": 91.852,
        "poster_path": "/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",
        "release_date": "2022-12-22",
        "title": "Babylon",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1727
    },
    {
        "adult": false,
        "backdrop_path": "/z3Qc5a0grcCREAQKqI195P05dVf.jpg",
        "genre_ids": [
            10749,
            35,
            12
        ],
        "id": 813726,
        "original_language": "en",
        "original_title": "A Tourist's Guide to Love",
        "overview": "After an unexpected break up, a travel executive accepts an assignment to go undercover and learn about the tourist industry in Vietnam. Along the way, she finds adventure and romance with her Vietnamese expat tour guide and they decide to hijack the tour bus in order to explore life and love off the beaten path.",
        "popularity": 91.615,
        "poster_path": "/uWkpjbBe4gRZilXRXbYfsMUZMhz.jpg",
        "release_date": "2023-04-21",
        "title": "A Tourist's Guide to Love",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 77
    },
    {
        "adult": false,
        "backdrop_path": "/uR0FopHrAjDlG5q6PZB07a1JOva.jpg",
        "genre_ids": [
            16,
            878,
            28
        ],
        "id": 610150,
        "original_language": "ja",
        "original_title": "ドラゴンボール超 スーパーヒーロー",
        "overview": "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
        "popularity": 91.261,
        "poster_path": "/pi0iZOEHeA3ih4p1IwAG4x2DZNH.jpg",
        "release_date": "2022-06-11",
        "title": "Dragon Ball Super: Super Hero",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2397
    },
    {
        "adult": false,
        "backdrop_path": "/2ZpwPckspTSY9sVEkjEyatgBWT7.jpg",
        "genre_ids": [
            27,
            53,
            18
        ],
        "id": 848058,
        "original_language": "es",
        "original_title": "Cerdita",
        "overview": "A bullied overweight teenager sees a glimpse of hope when her tormentors are brutally abducted by a mesmerizing stranger.",
        "popularity": 90.876,
        "poster_path": "/pIFeu5gF7ofAxI9NqrWbJAjjKn6.jpg",
        "release_date": "2022-10-07",
        "title": "Piggy",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 375
    },
    {
        "adult": false,
        "backdrop_path": "/cWczNud8Y8i8ab0Z4bxos4myWYO.jpg",
        "genre_ids": [
            16,
            10751
        ],
        "id": 38757,
        "original_language": "en",
        "original_title": "Tangled",
        "overview": "When the kingdom's most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynn's curious captor, who's looking for her ticket out of the tower where she's been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.",
        "popularity": 90.787,
        "poster_path": "/ym7Kst6a4uodryxqbGOxmewF235.jpg",
        "release_date": "2010-11-24",
        "title": "Tangled",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 10223
    },
    {
        "adult": false,
        "backdrop_path": "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
        "genre_ids": [
            28,
            12,
            14,
            878
        ],
        "id": 791373,
        "original_language": "en",
        "original_title": "Zack Snyder's Justice League",
        "overview": "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
        "popularity": 90.367,
        "poster_path": "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "release_date": "2021-03-18",
        "title": "Zack Snyder's Justice League",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 8839
    },
    {
        "adult": false,
        "backdrop_path": "/aAK25IGWGCk33c2rO2eYcek9rIB.jpg",
        "genre_ids": [
            18,
            27,
            9648,
            53
        ],
        "id": 934131,
        "original_language": "en",
        "original_title": "Soft & Quiet",
        "overview": "Taking place in real time, elementary school teacher Emily organizes a mixer of like-minded women, but an altercation between a woman from Emily’s past and the group leads to a volatile chain of events.",
        "popularity": 90.132,
        "poster_path": "/hrtO0sVcXolaiIjVoOADO2M24jm.jpg",
        "release_date": "2022-11-04",
        "title": "Soft & Quiet",
        "video": false,
        "vote_average": 6,
        "vote_count": 52
    },
    {
        "adult": false,
        "backdrop_path": "/1stUIsjawROZxjiCMtqqXqgfZWC.jpg",
        "genre_ids": [
            12,
            14
        ],
        "id": 672,
        "original_language": "en",
        "original_title": "Harry Potter and the Chamber of Secrets",
        "overview": "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.",
        "popularity": 89.715,
        "poster_path": "/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
        "release_date": "2002-11-13",
        "title": "Harry Potter and the Chamber of Secrets",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 19861
    },
    {
        "adult": false,
        "backdrop_path": "/3VssWM01TW8Qs0KP3xCsrYQF89A.jpg",
        "genre_ids": [
            35
        ],
        "id": 87584,
        "original_language": "en",
        "original_title": "Celebrity Sex Tape",
        "overview": "A group of college nerds secretly record a washed up celebrity having sex and post the tape on the internet. When the publicity revives the actress's career, every B-list celebrity, reality show reject, and celebutante in Hollywood want to star in the guys next \"production.\"",
        "popularity": 89.529,
        "poster_path": "/3FWSUD1yIvGPmLIXgyOS72MrTrC.jpg",
        "release_date": "2012-02-02",
        "title": "Celebrity Sex Tape",
        "video": false,
        "vote_average": 4.5,
        "vote_count": 58
    },
    {
        "adult": false,
        "backdrop_path": "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
        "genre_ids": [
            28,
            14,
            12
        ],
        "id": 460465,
        "original_language": "en",
        "original_title": "Mortal Kombat",
        "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
        "popularity": 89.37,
        "poster_path": "/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg",
        "release_date": "2021-04-07",
        "title": "Mortal Kombat",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 5221
    },
    {
        "adult": false,
        "backdrop_path": "/hjXXUUTNlBP11L8ASbfsrvublTh.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 1024546,
        "original_language": "en",
        "original_title": "Detective Knight: Rogue",
        "overview": "As Los Angeles prepares for Halloween, mask-wearing armed robbers critically wound detective James Knight’s partner in a shootout following a heist. With Knight in hot pursuit, the bandits flee L.A. for New York, where the detective’s dark past collides with his present case and threatens to tear his world apart…unless redemption can claim Knight first.",
        "popularity": 89.279,
        "poster_path": "/2wj5iUJ2B5AQ1lFctJgUrHHsp9B.jpg",
        "release_date": "2022-10-21",
        "title": "Detective Knight: Rogue",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 103
    },
    {
        "adult": false,
        "backdrop_path": "/wXsQvli6tWqja51pYxXNG1LFIGV.jpg",
        "genre_ids": [
            10751,
            16,
            18
        ],
        "id": 8587,
        "original_language": "en",
        "original_title": "The Lion King",
        "overview": "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
        "popularity": 89.099,
        "poster_path": "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        "release_date": "1994-06-23",
        "title": "The Lion King",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 16519
    },
    {
        "adult": false,
        "backdrop_path": "/qGQf2OHIkoh89K8XeKQzhxczf96.jpg",
        "genre_ids": [
            28,
            12,
            16,
            878
        ],
        "id": 324857,
        "original_language": "en",
        "original_title": "Spider-Man: Into the Spider-Verse",
        "overview": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
        "popularity": 88.999,
        "poster_path": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        "release_date": "2018-12-14",
        "title": "Spider-Man: Into the Spider-Verse",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 12711
    },
    {
        "adult": false,
        "backdrop_path": "/8GHxjXlI5rqyTBuVNekGTPjG5T6.jpg",
        "genre_ids": [
            16,
            10751,
            14
        ],
        "id": 14836,
        "original_language": "en",
        "original_title": "Coraline",
        "overview": "A young girl discovers an idealized parallel universe behind a secret door in her new home, unaware that it contains a sinister secret.",
        "popularity": 88.853,
        "poster_path": "/nUiumSEJAHtlmtOptoHEbhWJXk9.jpg",
        "release_date": "2009-02-05",
        "title": "Coraline",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 6585
    },
    {
        "adult": false,
        "backdrop_path": "/jzWT0zd8U77fqWg5WgUfYaMzSFz.jpg",
        "genre_ids": [
            28,
            878,
            14
        ],
        "id": 526896,
        "original_language": "en",
        "original_title": "Morbius",
        "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
        "popularity": 88.813,
        "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
        "release_date": "2022-03-30",
        "title": "Morbius",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 3431
    },
    {
        "adult": false,
        "backdrop_path": "/2OgSIyerY8zUNw8czWiIn6D4kos.jpg",
        "genre_ids": [
            27
        ],
        "id": 764,
        "original_language": "en",
        "original_title": "The Evil Dead",
        "overview": "In 1979, a group of college students find a Sumerian Book of the Dead in an old cabin they've rented for a weekend getaway.",
        "popularity": 88.679,
        "poster_path": "/uYxQ6xhP3WjqPZtxyAOnZQWnZqn.jpg",
        "release_date": "1981-09-10",
        "title": "The Evil Dead",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 3385
    },
    {
        "adult": false,
        "backdrop_path": "/4UYJvZkYcKbOc8Mor0EhoVaVkGE.jpg",
        "genre_ids": [
            35,
            10749
        ],
        "id": 218746,
        "original_language": "ko",
        "original_title": "젊은 엄마",
        "overview": "Nineteen-year-old, Jin-goo enjoys an erotic moment to himself while thinking about his pretty English tutor. Then one day, he is caught in the middle of an embarrassing moment and becomes awkward with her. However, this becomes an opportunity and she starts teaching him sex. Their replationship becomes an uncontrollable romance. However, she quits the tutoring and the relationship to get married.  Time goes on and Jin-goo is a grown up. He's used to thoughtless sex. However, his partner of benefit gets pregnant so he meets his future-mother-in-law to talk about marriage. However, she's so beautiful and sexy. He moves in with the in-laws but soon breaks out of the marrige due to his wife's fling. The mother-in-law doesn't know how to make it up to him for what her daughter has done. Jin-goo suggests something dangerous...",
        "popularity": 88.658,
        "poster_path": "/x73C5Hi8FuxCWdmY67evoV9V7xi.jpg",
        "release_date": "2013-07-31",
        "title": "Young Mother",
        "video": false,
        "vote_average": 5,
        "vote_count": 12
    },
    {
        "adult": false,
        "backdrop_path": "/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
        "genre_ids": [
            16,
            12,
            10751,
            35
        ],
        "id": 862,
        "original_language": "en",
        "original_title": "Toy Story",
        "overview": "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
        "popularity": 87.638,
        "poster_path": "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        "release_date": "1995-10-30",
        "title": "Toy Story",
        "video": false,
        "vote_average": 8,
        "vote_count": 16683
    },
    {
        "adult": false,
        "backdrop_path": "/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
        "genre_ids": [
            28,
            12,
            878,
            18
        ],
        "id": 315635,
        "original_language": "en",
        "original_title": "Spider-Man: Homecoming",
        "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
        "popularity": 87.541,
        "poster_path": "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        "release_date": "2017-07-05",
        "title": "Spider-Man: Homecoming",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 19972
    },
    {
        "adult": false,
        "backdrop_path": "/xOcwcyLM2lqXCrZG8AIHC8DXElF.jpg",
        "genre_ids": [
            27
        ],
        "id": 943221,
        "original_language": "es",
        "original_title": "Mal de ojo",
        "overview": "Nala, a thirteen-year-old girl from the city, travels with her family to her grandmother's home in the countryside, to try to find a cure for her little sister's mysterious illness - But she'll soon find her granny is not exactly what she seems...",
        "popularity": 87.521,
        "poster_path": "/vcym9A0idLCFI1iIMRFiXKRvnbs.jpg",
        "release_date": "2022-09-22",
        "title": "Evil Eye",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 199
    },
    {
        "adult": false,
        "backdrop_path": "/jazlkwXfw4KdF6fVTRsolOvRCmu.jpg",
        "genre_ids": [
            53,
            12
        ],
        "id": 924482,
        "original_language": "en",
        "original_title": "The Ledge",
        "overview": "A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight knit group of friends who will stop at nothing to destroy the evidence and anyone in their way.",
        "popularity": 87.384,
        "poster_path": "/S99eCSnRFfeZJmDaIGIZF58H7w.jpg",
        "release_date": "2022-02-18",
        "title": "The Ledge",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 254
    },
    {
        "adult": false,
        "backdrop_path": "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
        "genre_ids": [
            28,
            35,
            12
        ],
        "id": 436969,
        "original_language": "en",
        "original_title": "The Suicide Squad",
        "overview": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
        "popularity": 87.375,
        "poster_path": "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
        "release_date": "2021-07-28",
        "title": "The Suicide Squad",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 7284
    },
    {
        "adult": false,
        "backdrop_path": "/mZj8EUr6F1x2PWZjKPxaeYd5WRw.jpg",
        "genre_ids": [
            12,
            16,
            35,
            10751,
            14
        ],
        "id": 11688,
        "original_language": "en",
        "original_title": "The Emperor's New Groove",
        "overview": "Kuzco is a self-centered emperor who summons Pacha from a village and to tell him that his home will be destroyed to make room for Kuzco's new summer home. Kuzco's advisor, Yzma, tries to poison Kuzco and accidentally turns him into a llama, who accidentally ends up in Pacha's village. Pacha offers to help Kuzco if he doesn't destroy his house, and so they form an unlikely partnership.",
        "popularity": 87.189,
        "poster_path": "/wwbgkXQBEKtnyIJapk6gUgWkVw8.jpg",
        "release_date": "2000-12-15",
        "title": "The Emperor's New Groove",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 5919
    },
    {
        "adult": false,
        "backdrop_path": "/n5A7brJCjejceZmHyujwUTVgQNC.jpg",
        "genre_ids": [
            14,
            12
        ],
        "id": 12445,
        "original_language": "en",
        "original_title": "Harry Potter and the Deathly Hallows: Part 2",
        "overview": "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
        "popularity": 87.146,
        "poster_path": "/c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
        "release_date": "2011-07-07",
        "title": "Harry Potter and the Deathly Hallows: Part 2",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 18707
    },
    {
        "adult": false,
        "backdrop_path": "/pbIWKBWdVF61mEDLF9KCNUXEVpJ.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 826753,
        "original_language": "en",
        "original_title": "Candy Land",
        "overview": "Remy, a seemingly naive and devout young woman, finds herself cast out from her religious cult. With no place to turn, she immerses herself into the underground world of truck stop sex workers. Under the watchful eye of their matriarch and an enigmatic local lawman, Remy navigates between her strained belief system and the code to find her true calling in life.",
        "popularity": 87.069,
        "poster_path": "/r7ZipEd9oHHVVXTcvbx3Sd3Tukv.jpg",
        "release_date": "2023-01-06",
        "title": "Candy Land",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 61
    },
    {
        "adult": false,
        "backdrop_path": "/jILeJ60zPpIjjJHGSmIeY4eO30t.jpg",
        "genre_ids": [
            10749,
            18,
            28
        ],
        "id": 744,
        "original_language": "en",
        "original_title": "Top Gun",
        "overview": "For Lieutenant Pete 'Maverick' Mitchell and his friend and co-pilot Nick 'Goose' Bradshaw, being accepted into an elite training school for fighter pilots is a dream come true. But a tragedy, as well as personal demons, will threaten Pete's dreams of becoming an ace pilot.",
        "popularity": 86.953,
        "poster_path": "/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg",
        "release_date": "1986-05-16",
        "title": "Top Gun",
        "video": false,
        "vote_average": 7,
        "vote_count": 7349
    },
    {
        "adult": false,
        "backdrop_path": "/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
        "genre_ids": [
            35,
            80,
            9648
        ],
        "id": 661374,
        "original_language": "en",
        "original_title": "Glass Onion: A Knives Out Mystery",
        "overview": "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
        "popularity": 86.896,
        "poster_path": "/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
        "release_date": "2022-11-23",
        "title": "Glass Onion: A Knives Out Mystery",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 4066
    },
    {
        "adult": false,
        "backdrop_path": "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
        "genre_ids": [
            10751,
            16,
            14,
            10402,
            35,
            12
        ],
        "id": 354912,
        "original_language": "en",
        "original_title": "Coco",
        "overview": "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
        "popularity": 86.843,
        "poster_path": "/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        "release_date": "2017-10-27",
        "title": "Coco",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 17191
    },
    {
        "adult": false,
        "backdrop_path": "/AqLcLsGGTzAjm3pCCq0CZCQrp6m.jpg",
        "genre_ids": [
            12,
            14
        ],
        "id": 12444,
        "original_language": "en",
        "original_title": "Harry Potter and the Deathly Hallows: Part 1",
        "overview": "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
        "popularity": 86.841,
        "poster_path": "/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
        "release_date": "2010-10-06",
        "title": "Harry Potter and the Deathly Hallows: Part 1",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 17344
    },
    {
        "adult": false,
        "backdrop_path": "/oqwqnaaoSpQMqAQyoEiF8W2F7Id.jpg",
        "genre_ids": [
            10751,
            35,
            16,
            12
        ],
        "id": 1018403,
        "original_language": "en",
        "original_title": "Tom and Jerry Snowman's Land",
        "overview": "It’s time to chase that holiday spirit with Tom and Jerry! With magic in the air, Jerry and his nephew, Tuffy, make a snow mouse that miraculously comes to life! To keep their new friend, Larry the snow mouse from melting, Tuffy and Jerry must race him to the fabled Snowman’s Village. In hot pursuit, Tom and devious Dr. Doublevay have their own plans for Larry’s magic.",
        "popularity": 86.654,
        "poster_path": "/memqWrs4zmLgMBfzTfebrOXbytG.jpg",
        "release_date": "2022-09-06",
        "title": "Tom and Jerry Snowman's Land",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 31
    },
    {
        "adult": false,
        "backdrop_path": "/h1gxz6U2HdDf0AMFXnehz0Muoup.jpg",
        "genre_ids": [
            35,
            12,
            10751
        ],
        "id": 643215,
        "original_language": "fr",
        "original_title": "Astérix & Obélix : L'Empire du Milieu",
        "overview": "Gallic heroes and forever friends Asterix and Obelix journey to China to help Princess Sa See save the Empress and her land from a nefarious prince.",
        "popularity": 86.652,
        "poster_path": "/ifOqT5SmA4ANjmyEacLw3KAFKUd.jpg",
        "release_date": "2023-02-01",
        "title": "Asterix & Obelix: The Middle Kingdom",
        "video": false,
        "vote_average": 4.8,
        "vote_count": 335
    },
    {
        "adult": false,
        "backdrop_path": "/eG0oOQVsniPAuecPzDD1B1gnYWy.jpg",
        "genre_ids": [
            16,
            35,
            12,
            10751
        ],
        "id": 774825,
        "original_language": "en",
        "original_title": "The Ice Age Adventures of Buck Wild",
        "overview": "The fearless one-eyed weasel Buck teams up with mischievous possum brothers Crash & Eddie as they head off on a new adventure into Buck's home: The Dinosaur World.",
        "popularity": 86.51,
        "poster_path": "/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg",
        "release_date": "2022-01-28",
        "title": "The Ice Age Adventures of Buck Wild",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 1499
    },
    {
        "adult": false,
        "backdrop_path": "/ecaB1LUoQE1ylZJVF5KLRTkewt8.jpg",
        "genre_ids": [
            28,
            35,
            80
        ],
        "id": 683328,
        "original_language": "id",
        "original_title": "The Big 4",
        "overview": "A by-the-book female detective teams up with four down-on-their-luck assassins to investigate her father's murder.",
        "popularity": 86.226,
        "poster_path": "/gxtf1bovLDyd0dMcKXdwVyqVsuK.jpg",
        "release_date": "2022-12-19",
        "title": "The Big 4",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 153
    },
    {
        "adult": false,
        "backdrop_path": "/sqVxhRkPwOo6jogWZjE99V1HRE1.jpg",
        "genre_ids": [
            16,
            35,
            10751
        ],
        "id": 1037858,
        "original_language": "en",
        "original_title": "The Soccer Football Movie",
        "overview": "When mysterious green slime monsters start popping out of soccer balls, all-star athletes Zlatan Ibrahimović and Megan Rapinoe must team up with their four biggest fans to stop evil scientist \"Weird Al\" Yankovic from stealing their talent.",
        "popularity": 85.995,
        "poster_path": "/sWoYDNPNZs5MtzPbirXV73tIHrA.jpg",
        "release_date": "2022-11-09",
        "title": "The Soccer Football Movie",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 89
    },
    {
        "adult": false,
        "backdrop_path": "/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 960704,
        "original_language": "ja",
        "original_title": "鋼の錬金術師 完結編 最後の錬成",
        "overview": "The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
        "popularity": 85.544,
        "poster_path": "/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
        "release_date": "2022-06-24",
        "title": "Fullmetal Alchemist: The Final Alchemy",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 154
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            80
        ],
        "id": 235331,
        "original_language": "ja",
        "original_title": "残酷・女高生(性)私刑",
        "overview": "A high school student is captured and sexually tortured.",
        "popularity": 85.523,
        "poster_path": "/owcqxnEq9UixRbl4lXc6zid0piQ.jpg",
        "release_date": "1975-07-23",
        "title": "High School Lynching",
        "video": false,
        "vote_average": 3,
        "vote_count": 2
    },
    {
        "adult": false,
        "backdrop_path": "/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg",
        "genre_ids": [
            28,
            80,
            14,
            878
        ],
        "id": 629176,
        "original_language": "en",
        "original_title": "Samaritan",
        "overview": "Thirteen year old Sam Cleary suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 25 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.",
        "popularity": 85.509,
        "poster_path": "/zgH8Ej50n2cvJCMJrxd4twEwSqz.jpg",
        "release_date": "2022-08-25",
        "title": "Samaritan",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 1637
    },
    {
        "adult": false,
        "backdrop_path": "/ml8YBTJq7UkALfI022FWscCQuQW.jpg",
        "genre_ids": [
            14,
            35,
            10751
        ],
        "id": 642885,
        "original_language": "en",
        "original_title": "Hocus Pocus 2",
        "overview": "29 years since the Black Flame Candle was last lit, the 17th-century Sanderson sisters are resurrected, and they are looking for revenge. Now it's up to three high school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow's Eve.",
        "popularity": 84.716,
        "poster_path": "/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
        "release_date": "2022-09-27",
        "title": "Hocus Pocus 2",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 1381
    },
    {
        "adult": false,
        "backdrop_path": "/5rrGVmRUuCKVbqUu41XIWTXJmNA.jpg",
        "genre_ids": [
            12,
            14,
            10751
        ],
        "id": 674,
        "original_language": "en",
        "original_title": "Harry Potter and the Goblet of Fire",
        "overview": "When Harry Potter's name emerges from the Goblet of Fire, he becomes a competitor in a grueling battle for glory among three wizarding schools—the Triwizard Tournament. But since Harry never submitted his name for the Tournament, who did? Now Harry must confront a deadly dragon, fierce water demons and an enchanted maze only to find himself in the cruel grasp of He Who Must Not Be Named.",
        "popularity": 84.396,
        "poster_path": "/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
        "release_date": "2005-11-16",
        "title": "Harry Potter and the Goblet of Fire",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 18783
    },
    {
        "adult": false,
        "backdrop_path": "/ubTGkxyRvYldfA0HjULNnEwEyM4.jpg",
        "genre_ids": [
            53,
            27
        ],
        "id": 790409,
        "original_language": "es",
        "original_title": "El último hereje",
        "overview": "Juan Conte is a world-renowned spokesman of the new atheism. After suffering a heart attack, he receives a transplant and a change in his personal life begins, opening up to the possibility of being in a couple for the first time. Juan will go on a journey of horror and pain, in which his vision of reality will be put to the test.",
        "popularity": 84.317,
        "poster_path": "/1j9B1iao0kqZnfSUqPadfXDdWNg.jpg",
        "release_date": "2022-11-09",
        "title": "The Last Heretic",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 20
    },
    {
        "adult": false,
        "backdrop_path": "/ss0Os3uWJfQAENILHZUdX8Tt1OC.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 545611,
        "original_language": "en",
        "original_title": "Everything Everywhere All at Once",
        "overview": "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
        "popularity": 84.226,
        "poster_path": "/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
        "release_date": "2022-03-24",
        "title": "Everything Everywhere All at Once",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 4628
    },
    {
        "adult": false,
        "backdrop_path": "/uzIGtyS6bbnJzGsPL93WCF1FWm8.jpg",
        "genre_ids": [
            12,
            28,
            14
        ],
        "id": 1865,
        "original_language": "en",
        "original_title": "Pirates of the Caribbean: On Stranger Tides",
        "overview": "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
        "popularity": 83.986,
        "poster_path": "/keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
        "release_date": "2011-05-14",
        "title": "Pirates of the Caribbean: On Stranger Tides",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 12820
    },
    {
        "adult": false,
        "backdrop_path": "/obKmfNexgL4ZP5cAmzdL4KbHHYX.jpg",
        "genre_ids": [
            12,
            14
        ],
        "id": 673,
        "original_language": "en",
        "original_title": "Harry Potter and the Prisoner of Azkaban",
        "overview": "Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all.",
        "popularity": 83.959,
        "poster_path": "/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
        "release_date": "2004-05-31",
        "title": "Harry Potter and the Prisoner of Azkaban",
        "video": false,
        "vote_average": 8,
        "vote_count": 19495
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            35,
            28
        ],
        "id": 1090328,
        "original_language": "es",
        "original_title": "La Trampa",
        "overview": "",
        "popularity": 83.735,
        "poster_path": "/nXhPTEIEDxekCZg9DwZQNshZ432.jpg",
        "release_date": "2022-08-11",
        "title": "La Trampa",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 7
    },
    {
        "adult": false,
        "backdrop_path": "/wRWEA3TeGGyocIPKFiTDzPK3HfN.jpg",
        "genre_ids": [
            18
        ],
        "id": 405871,
        "original_language": "ja",
        "original_title": "令嬢肉奴隷",
        "overview": "In a summer in Shonan village, Sumiko is the daughter of an important upper-class Shikishima family, she loves to paint pictures, is going through a cooling-off of an arranged marriage that did not work out. However, she feels attraction for Nishina a rough and obscene man ...  On the other hand, the younger sister, Naomi Sumiko is envious of her sister for her beauty. Naomi feels ugly since all men seem to like Sumiko. Both sisters then become embroiled in a major problem in discovering the real intentions of Nishina, a man who hides behind a mask to rape women.",
        "popularity": 83.688,
        "poster_path": "/nrUDsisIxwAB9s5caM5SE0HJEHe.jpg",
        "release_date": "1985-08-24",
        "title": "On the Beach",
        "video": false,
        "vote_average": 5,
        "vote_count": 8
    },
    {
        "adult": false,
        "backdrop_path": "/qkv9i6XvM5O7iYYsJHQff4ZN01J.jpg",
        "genre_ids": [
            878,
            27,
            12,
            28
        ],
        "id": 1013870,
        "original_language": "en",
        "original_title": "Kids vs. Aliens",
        "overview": "All Gary wants is to make awesome home movies with his best buds. All his older sister Samantha wants is to hang with the cool kids. When their parents head out of town one Halloween weekend, an all-time rager of a teen house party turns to terror when aliens attack, forcing the siblings to band together to survive the night.",
        "popularity": 83.585,
        "poster_path": "/wQ53sO5n9LCFbssV3oQ4CuajL1L.jpg",
        "release_date": "2023-01-20",
        "title": "Kids vs. Aliens",
        "video": false,
        "vote_average": 6,
        "vote_count": 53
    },
    {
        "adult": false,
        "backdrop_path": "/kdbLf3aTQsEXqYlH9vA4fzmnSFz.jpg",
        "genre_ids": [
            10752,
            18,
            28
        ],
        "id": 228150,
        "original_language": "en",
        "original_title": "Fury",
        "overview": "In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named 'Wardaddy' commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
        "popularity": 83.458,
        "poster_path": "/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
        "release_date": "2014-10-15",
        "title": "Fury",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 10736
    },
    {
        "adult": false,
        "backdrop_path": "/wVxlmhk4OS2eCr0wTQcM4zJ20ml.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 906221,
        "original_language": "en",
        "original_title": "Magic Mike's Last Dance",
        "overview": "Mike Lane takes to the stage again after a lengthy hiatus, following a business deal that went bust, leaving him broke and taking bartender gigs in Florida. For what he hopes will be one last hurrah, Mike heads to London with a wealthy socialite who lures him with an offer he can’t refuse… and an agenda all her own. With everything on the line, once Mike discovers what she truly has in mind, will he—and the roster of hot new dancers he’ll have to whip into shape—be able to pull it off?",
        "popularity": 83.35,
        "poster_path": "/9a9pyJZRhUWUSBT8BQqWihtqbI8.jpg",
        "release_date": "2023-02-09",
        "title": "Magic Mike's Last Dance",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 254
    },
    {
        "adult": false,
        "backdrop_path": "/j26C3RvvebeuTMfJvWR85Q9dqwX.jpg",
        "genre_ids": [
            16,
            35
        ],
        "id": 82386,
        "original_language": "ja",
        "original_title": "らんま½ 超無差別決戦! 乱馬チームVS伝説の鳳凰",
        "overview": "In this animated short, poetry-spouting high-school swordsman Tatewaki Kuno comes into possession of the egg of the legendary phoenix, which is said to grant its owner incredible powers. A shopkeeper sells the egg to Kuno on one condition: \"Never, never, in any circumstance, put the darn thing on your head.\"",
        "popularity": 83.294,
        "poster_path": "/cEMYFKZdLMNlYoGixnCzFsDsW3d.jpg",
        "release_date": "1994-08-20",
        "title": "Ranma ½: The Movie 3 — The Super Non-Discriminatory Showdown: Team Ranma vs. the Legendary Phoenix",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 32
    },
    {
        "adult": false,
        "backdrop_path": "/b2FxWOxe9K7ZZ1uaPOze2RJ1ajq.jpg",
        "genre_ids": [
            27,
            28,
            35
        ],
        "id": 675054,
        "original_language": "es",
        "original_title": "MexZombies",
        "overview": "A group of teenagers must face a zombie apocalypse, and help reestablish order.",
        "popularity": 83.171,
        "poster_path": "/pTxw4GFE3ZfzJfvuUsPyD5njAuI.jpg",
        "release_date": "2022-10-26",
        "title": "MexZombies",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 136
    },
    {
        "adult": false,
        "backdrop_path": "/en971MEXui9diirXlogOrPKmsEn.jpg",
        "genre_ids": [
            28,
            12,
            35
        ],
        "id": 293660,
        "original_language": "en",
        "original_title": "Deadpool",
        "overview": "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
        "popularity": 83.161,
        "poster_path": "/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
        "release_date": "2016-02-09",
        "title": "Deadpool",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 28340
    },
    {
        "adult": false,
        "backdrop_path": "/5tub2Kw6NboWFblA1CgDEwB59jP.jpg",
        "genre_ids": [
            12,
            10751,
            16,
            28,
            35
        ],
        "id": 177572,
        "original_language": "en",
        "original_title": "Big Hero 6",
        "overview": "A special bond develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
        "popularity": 82.802,
        "poster_path": "/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
        "release_date": "2014-10-24",
        "title": "Big Hero 6",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 14426
    },
    {
        "adult": false,
        "backdrop_path": "/vLPSvAt1CnfmDCeqG3zkFh0s6S4.jpg",
        "genre_ids": [
            10752,
            28
        ],
        "id": 542196,
        "original_language": "en",
        "original_title": "Wolf Hound",
        "overview": "Inspired by the real-life German special operations unit KG 200 that shot down, repaired, and flew Allied aircraft as Trojan horses, \"Wolf Hound\" takes place in 1944 German-occupied France and follows the daring exploits of Jewish-American fighter pilot Captain David Holden. Ambushed behind enemy lines, Holden must rescue a captured B-17 Flying Fortress crew, evade a ruthless enemy stalking him at every turn, and foil a plot that could completely alter the outcome of World War II.",
        "popularity": 82.72,
        "poster_path": "/gHC0eFvXXNokP3sSNCTG2uks87R.jpg",
        "release_date": "2022-06-03",
        "title": "Wolf Hound",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 81
    },
    {
        "adult": false,
        "backdrop_path": "/4OTYefcAlaShn6TGVK33UxLW9R7.jpg",
        "genre_ids": [
            28,
            12,
            53,
            10752,
            9648
        ],
        "id": 476669,
        "original_language": "en",
        "original_title": "The King's Man",
        "overview": "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
        "popularity": 82.705,
        "poster_path": "/mpOzVPDFDI15WaKV6dqpYp441rZ.jpg",
        "release_date": "2021-12-22",
        "title": "The King's Man",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 3700
    },
    {
        "adult": false,
        "backdrop_path": "/al1DWKnt5kcSeV9onSJTdpqtRmq.jpg",
        "genre_ids": [
            16,
            35,
            18,
            28
        ],
        "id": 45288,
        "original_language": "ja",
        "original_title": "はじめの一歩 : 間柴vs木村 / はじめの一歩 THE FIGHTING! 木村達也vs間柴了",
        "overview": "Kimura finally has his championship match. It takes place at the annual champion carnival. But now he must face the intense champion, Mashiba for the Junior Lightweight championship.",
        "popularity": 82.701,
        "poster_path": "/9UNq2kogJ0fNA6TfFJdJt0PXOwV.jpg",
        "release_date": "2003-09-05",
        "title": "Fighting Spirit - Mashiba vs. Kimura",
        "video": false,
        "vote_average": 6,
        "vote_count": 20
    },
    {
        "adult": false,
        "backdrop_path": "/c6BEspznv2528qaOGzvqtpktn1J.jpg",
        "genre_ids": [
            80,
            18,
            53
        ],
        "id": 862965,
        "original_language": "en",
        "original_title": "Emily the Criminal",
        "overview": "Desperate for income, Emily takes a shady gig buying goods with stolen credit cards supplied by a charismatic middleman named Youcef. Seduced by the quick cash and illicit thrills, they hatch a plan to take their business to the next level.",
        "popularity": 82.392,
        "poster_path": "/iZvzMpREGiqDQ5eYbx8z70qPgst.jpg",
        "release_date": "2022-08-12",
        "title": "Emily the Criminal",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 501
    },
    {
        "adult": false,
        "backdrop_path": "/nW5fUbldp1DYf2uQ3zJTUdachOu.jpg",
        "genre_ids": [
            16,
            28,
            12,
            10751,
            878
        ],
        "id": 718789,
        "original_language": "en",
        "original_title": "Lightyear",
        "overview": "Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.",
        "popularity": 82.092,
        "poster_path": "/ox4goZd956BxqJH6iLwhWPL9ct4.jpg",
        "release_date": "2022-06-15",
        "title": "Lightyear",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 2834
    },
    {
        "adult": false,
        "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
        "genre_ids": [
            10749,
            16,
            18
        ],
        "id": 372058,
        "original_language": "ja",
        "original_title": "君の名は。",
        "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
        "popularity": 81.483,
        "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
        "release_date": "2016-08-26",
        "title": "Your Name.",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 9821
    },
    {
        "adult": false,
        "backdrop_path": "/vHJlbhsXrZ5yrO2KqCbGSIU6fRX.jpg",
        "genre_ids": [
            28,
            9648,
            878,
            53
        ],
        "id": 198663,
        "original_language": "en",
        "original_title": "The Maze Runner",
        "overview": "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
        "popularity": 81.47,
        "poster_path": "/ode14q7WtDugFDp78fo9lCsmay9.jpg",
        "release_date": "2014-09-10",
        "title": "The Maze Runner",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 15562
    },
    {
        "adult": false,
        "backdrop_path": "/cGnaZm6EQOJESde3Vv4v53Zk4gN.jpg",
        "genre_ids": [
            18,
            35
        ],
        "id": 626735,
        "original_language": "en",
        "original_title": "Dog",
        "overview": "An army ranger and his dog embark on a road trip along the Pacific Coast Highway to attend a friend's funeral.",
        "popularity": 81.441,
        "poster_path": "/zHQy4h36WwuCetKS7C3wcT1hkgA.jpg",
        "release_date": "2022-02-17",
        "title": "Dog",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 1201
    },
    {
        "adult": false,
        "backdrop_path": "/zbTaYrQzZaaEf1SZlv3RTZiUvZw.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 86331,
        "original_language": "fr",
        "original_title": "Q",
        "overview": "In a social context deteriorated by a countrywide economic crisis, the life of several people will be turned upside down after they meet Cécile, a character who symbolizes desire.",
        "popularity": 81.412,
        "poster_path": "/nOBgorydp9U3ydSRoO2MaYZMwMT.jpg",
        "release_date": "2011-10-06",
        "title": "Desire",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 710
    },
    {
        "adult": false,
        "backdrop_path": "/sLWUtbrpiLp23a0XDSiUiltdFPJ.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 1930,
        "original_language": "en",
        "original_title": "The Amazing Spider-Man",
        "overview": "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
        "popularity": 81.325,
        "poster_path": "/jIfkQNARYyERqRAq1p1c8xgePp4.jpg",
        "release_date": "2012-06-23",
        "title": "The Amazing Spider-Man",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 15962
    },
    {
        "adult": false,
        "backdrop_path": "/4avmIRBBOs9b4DKoenf8SWWJJP7.jpg",
        "genre_ids": [
            53,
            36,
            18
        ],
        "id": 726759,
        "original_language": "en",
        "original_title": "Tetris",
        "overview": "In 1988, American video game salesman Henk Rogers discovers the video game Tetris. When he sets out to bring the game to the world, he enters a dangerous web of lies and corruption behind the Iron Curtain.",
        "popularity": 81.149,
        "poster_path": "/4F2QwCOYHJJjecSvdOjStuVLkpu.jpg",
        "release_date": "2023-03-15",
        "title": "Tetris",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 571
    },
    {
        "adult": false,
        "backdrop_path": "/rzdPqYx7Um4FUZeD8wpXqjAUcEm.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 597,
        "original_language": "en",
        "original_title": "Titanic",
        "overview": "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
        "popularity": 81.049,
        "poster_path": "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        "release_date": "1997-11-18",
        "title": "Titanic",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 22867
    },
    {
        "adult": false,
        "backdrop_path": "/17sIiv4LGapYnyvdpKxA1vozBqY.jpg",
        "genre_ids": [
            10751,
            12,
            10402,
            16
        ],
        "id": 939210,
        "original_language": "en",
        "original_title": "Blue's Big City Adventure",
        "overview": "When Josh gets the opportunity of a lifetime to audition for Rainbow Puppy’s Broadway musical, Josh and Blue skidoo to NYC for the very first time where they meet new friends and discover the magic of music, dance, and following one’s dreams.",
        "popularity": 80.88,
        "poster_path": "/5JV5nDPMYQLaZz2n0SmxQfMYfLn.jpg",
        "release_date": "2022-11-18",
        "title": "Blue's Big City Adventure",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 84
    },
    {
        "adult": false,
        "backdrop_path": "/ytTQoYkdpsgtfDWrNFCei8Mfbxu.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            14,
            35
        ],
        "id": 529203,
        "original_language": "en",
        "original_title": "The Croods: A New Age",
        "overview": "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",
        "popularity": 80.761,
        "poster_path": "/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",
        "release_date": "2020-11-25",
        "title": "The Croods: A New Age",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 3343
    },
    {
        "adult": false,
        "backdrop_path": "/70AV2Xx5FQYj20labp0EGdbjI6E.jpg",
        "genre_ids": [
            28,
            12,
            80,
            53
        ],
        "id": 637649,
        "original_language": "en",
        "original_title": "Wrath of Man",
        "overview": "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
        "popularity": 80.759,
        "poster_path": "/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
        "release_date": "2021-04-22",
        "title": "Wrath of Man",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 4402
    },
    {
        "adult": false,
        "backdrop_path": "/997ToEZvF2Obp9zNZbY5ELVnmrW.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 537915,
        "original_language": "en",
        "original_title": "After",
        "overview": "Tessa Young is a dedicated student, dutiful daughter and loyal girlfriend to her high school sweetheart. Entering her first semester of college, Tessa's guarded world opens up when she meets Hardin Scott, a mysterious and brooding rebel who makes her question all she thought she knew about herself -- and what she wants out of life.",
        "popularity": 80.591,
        "poster_path": "/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
        "release_date": "2019-04-11",
        "title": "After",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 7594
    },
    {
        "adult": false,
        "backdrop_path": "/mPyiNWS0upEG1mGKOKyCQSoZpnp.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 102382,
        "original_language": "en",
        "original_title": "The Amazing Spider-Man 2",
        "overview": "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
        "popularity": 80.55,
        "poster_path": "/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg",
        "release_date": "2014-04-16",
        "title": "The Amazing Spider-Man 2",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 11972
    },
    {
        "adult": false,
        "backdrop_path": "/rBWF1zHdU2abEfmhAoLMr3PUJC5.jpg",
        "genre_ids": [
            878,
            53,
            27
        ],
        "id": 520763,
        "original_language": "en",
        "original_title": "A Quiet Place Part II",
        "overview": "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
        "popularity": 80.257,
        "poster_path": "/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
        "release_date": "2021-05-21",
        "title": "A Quiet Place Part II",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 5351
    },
    {
        "adult": false,
        "backdrop_path": "/kIgfFzjjBNgx6Tr2LCw8Zkq921s.jpg",
        "genre_ids": [
            28,
            16,
            878
        ],
        "id": 303857,
        "original_language": "ja",
        "original_title": "ドラゴンボールZ 復活の「F」",
        "overview": "One peaceful day on Earth, two remnants of Frieza's army named Sorbet and Tagoma arrive searching for the Dragon Balls with the aim of reviving Frieza. They succeed, and Frieza subsequently seeks revenge on the Saiyans.",
        "popularity": 80.244,
        "poster_path": "/soq3AxjALdBfdPAm8H7yuMmNL5Y.jpg",
        "release_date": "2015-04-18",
        "title": "Dragon Ball Z: Resurrection 'F'",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 1642
    },
    {
        "adult": false,
        "backdrop_path": "/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 423108,
        "original_language": "en",
        "original_title": "The Conjuring: The Devil Made Me Do It",
        "overview": "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
        "popularity": 80.232,
        "poster_path": "/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
        "release_date": "2021-05-25",
        "title": "The Conjuring: The Devil Made Me Do It",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 5085
    },
    {
        "adult": false,
        "backdrop_path": "/fqw8nJLPRgKRyFSDC0xBsC06NGC.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 639933,
        "original_language": "en",
        "original_title": "The Northman",
        "overview": "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
        "popularity": 80.124,
        "poster_path": "/aSSJMnHknzKjlZ6zybwD7eyJ4Po.jpg",
        "release_date": "2022-04-07",
        "title": "The Northman",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 3358
    },
    {
        "adult": false,
        "backdrop_path": "/jJKZaTBNenlFclQyjrnvzkRmvWE.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            18,
            35
        ],
        "id": 150540,
        "original_language": "en",
        "original_title": "Inside Out",
        "overview": "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Riley's guiding emotions— Joy, Fear, Anger, Disgust and Sadness—live in Headquarters, the control centre inside Riley's mind, where they help advise her through everyday life and tries to keep things positive, but the emotions conflict on how best to navigate a new city, house and school.",
        "popularity": 79.747,
        "poster_path": "/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
        "release_date": "2015-06-09",
        "title": "Inside Out",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 19006
    },
    {
        "adult": false,
        "backdrop_path": "/nyRlcuwCtJVjuwYbAODMTUSixCw.jpg",
        "genre_ids": [
            18,
            53
        ],
        "id": 1071806,
        "original_language": "th",
        "original_title": "คนหิว เกมกระหาย",
        "overview": "A talented young street-food cook pushes herself to the limit after accepting an invitation to train under an infamous and ruthless chef.",
        "popularity": 79.424,
        "poster_path": "/rNYHsKHFP3AY2PIDZgz3AuY7QoC.jpg",
        "release_date": "2023-04-04",
        "title": "Hunger",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 218
    },
    {
        "adult": false,
        "backdrop_path": "/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
        "genre_ids": [
            18,
            28,
            53
        ],
        "id": 545609,
        "original_language": "en",
        "original_title": "Extraction",
        "overview": "Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord.",
        "popularity": 79.33,
        "poster_path": "/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg",
        "release_date": "2020-04-24",
        "title": "Extraction",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 4958
    },
    {
        "adult": false,
        "backdrop_path": "/ws0B9kGubLNPNZafRiDdE3K3Pj3.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 1100962,
        "original_language": "sv",
        "original_title": "One More Time",
        "overview": "On her 40th birthday, Amelia makes a fateful wish to be 18 again back in 2002 but soon regrets it when she's stuck reliving the day over and over again.",
        "popularity": 78.982,
        "poster_path": "/wUVuJXnBfNpSwvSDGnqzZ5VUBwP.jpg",
        "release_date": "2023-04-21",
        "title": "One More Time",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 43
    },
    {
        "adult": false,
        "backdrop_path": "/yBov7O4eXDcBLDpZrOHZzFr8rIl.jpg",
        "genre_ids": [
            16,
            35,
            12,
            10751
        ],
        "id": 459151,
        "original_language": "en",
        "original_title": "The Boss Baby: Family Business",
        "overview": "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
        "popularity": 78.962,
        "poster_path": "/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
        "release_date": "2021-07-01",
        "title": "The Boss Baby: Family Business",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 2194
    },
    {
        "adult": false,
        "backdrop_path": "/1GGfWFp9hp4RUHRHxd505z9rVFa.jpg",
        "genre_ids": [
            12,
            14,
            35,
            10751,
            878
        ],
        "id": 9607,
        "original_language": "en",
        "original_title": "Super Mario Bros.",
        "overview": "Mario and Luigi, plumbers from Brooklyn, find themselves in an alternate universe where evolved dinosaurs live in hi-tech squalor. They're the only hope to save our universe from invasion by the dino dictator, Koopa.",
        "popularity": 78.434,
        "poster_path": "/yt5bbMfKpg1nRr4k5edxs7tPK2m.jpg",
        "release_date": "1993-05-28",
        "title": "Super Mario Bros.",
        "video": false,
        "vote_average": 4.3,
        "vote_count": 1106
    },
    {
        "adult": false,
        "backdrop_path": "/7qKWTyYvkyIrWgkUOHiNxHv3FNK.jpg",
        "genre_ids": [
            12,
            14,
            9648
        ],
        "id": 675,
        "original_language": "en",
        "original_title": "Harry Potter and the Order of the Phoenix",
        "overview": "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students to defend themselves against the dark arts.",
        "popularity": 78.344,
        "poster_path": "/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",
        "release_date": "2007-06-28",
        "title": "Harry Potter and the Order of the Phoenix",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 17720
    },
    {
        "adult": false,
        "backdrop_path": "/vZDACOEHE024r3Dd3TaKlqKrRco.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 526811,
        "original_language": "fr",
        "original_title": "Passion simple",
        "overview": "A man and a woman are brought together by chance for several months. He is younger than she is, married, Russian, officially a diplomat stationed in Paris. She is a beautiful teacher and researcher, with her feet firmly on the ground. The film follows the evolution of their love, from the beginning to end.",
        "popularity": 78.338,
        "poster_path": "/ezSCLw2xy2OqL63Dx7zoHlj177v.jpg",
        "release_date": "2021-01-14",
        "title": "Simple Passion",
        "video": false,
        "vote_average": 4.9,
        "vote_count": 36
    },
    {
        "adult": false,
        "backdrop_path": "/f76pf0QxldYY8mMHW4kudXhuLZB.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 916386,
        "original_language": "de",
        "original_title": "Der Passfälscher",
        "overview": "Jewish aesthete Cioma, 21, does not let anyone take away his joy of life, especially not the Nazis. In 1942, he has to find new ways to make his living in Berlin and escape deportation. In the process he discovers his talent for forgery: not only with passports, but also his own identity.",
        "popularity": 78.29,
        "poster_path": "/iJmVqG9y156lRObOEIAOnAEnAnz.jpg",
        "release_date": "2022-10-13",
        "title": "The Forger",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 11
    },
    {
        "adult": false,
        "backdrop_path": "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
        "genre_ids": [
            28,
            878,
            12
        ],
        "id": 588228,
        "original_language": "en",
        "original_title": "The Tomorrow War",
        "overview": "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
        "popularity": 78.176,
        "poster_path": "/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
        "release_date": "2021-09-03",
        "title": "The Tomorrow War",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 2507
    },
    {
        "adult": false,
        "backdrop_path": "/8cV7zcFvazfEY8uStId95FHXcwk.jpg",
        "genre_ids": [
            28,
            9648,
            53,
            878,
            12
        ],
        "id": 615173,
        "original_language": "ko",
        "original_title": "마녀 2",
        "overview": "A girl wakes up in a huge secret laboratory, then accidentally meets another girl who is trying to protect her house from a gang. The mystery girl overthrows the gang with her unexpected powers, and laboratory staff set out to find her.",
        "popularity": 78.172,
        "poster_path": "/icQM4lMTEUVYPrSOV3BH9LZjvmY.jpg",
        "release_date": "2022-06-15",
        "title": "The Witch: Part 2. The Other One",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 148
    },
    {
        "adult": false,
        "backdrop_path": "/6YwkGolwdOMNpbTOmLjoehlVWs5.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 99861,
        "original_language": "en",
        "original_title": "Avengers: Age of Ultron",
        "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
        "popularity": 78.134,
        "poster_path": "/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
        "release_date": "2015-04-22",
        "title": "Avengers: Age of Ultron",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 21272
    },
    {
        "adult": false,
        "backdrop_path": "/1n00NlOGRFZVs8coBxyZLm5l4EC.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 335988,
        "original_language": "en",
        "original_title": "Transformers: The Last Knight",
        "overview": "Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.",
        "popularity": 78.107,
        "poster_path": "/s5HQf2Gb3lIO2cRcFwNL9sn1o1o.jpg",
        "release_date": "2017-06-16",
        "title": "Transformers: The Last Knight",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 5485
    },
    {
        "adult": false,
        "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 278,
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "popularity": 78.085,
        "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "release_date": "1994-09-23",
        "title": "The Shawshank Redemption",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 23764
    },
    {
        "adult": false,
        "backdrop_path": "/7PzpnGL4W0oy1NAd0toIZeuDt0G.jpg",
        "genre_ids": [
            16,
            35,
            14
        ],
        "id": 28152,
        "original_language": "ja",
        "original_title": "スーパーマリオブラザーズ ピーチ姫救出大作戦!",
        "overview": "When Princess Peach is kidnapped by the monster King Koopa, Mario and his brother Luigi journey to the Mushroom Kingdom to rescue her.",
        "popularity": 78.034,
        "poster_path": "/d8466YAgDFZmsrWmgizPcUQMsIx.jpg",
        "release_date": "1986-07-20",
        "title": "Super Mario Brothers: Great Mission to Rescue Princess Peach",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 28
    },
    {
        "adult": false,
        "backdrop_path": "/wD44moEofk0EZyFxLQItuwdGsvV.jpg",
        "genre_ids": [
            16,
            10751,
            35,
            14,
            12
        ],
        "id": 809,
        "original_language": "en",
        "original_title": "Shrek 2",
        "overview": "Shrek, Fiona and Donkey set off to Far, Far Away to meet Fiona's mother and father. But not everyone is happy. Shrek and the King find it hard to get along, and there's tension in the marriage. The fairy godmother discovers that Shrek has married Fiona instead of her Son Prince Charming and sets about destroying their marriage.",
        "popularity": 77.895,
        "poster_path": "/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg",
        "release_date": "2004-05-19",
        "title": "Shrek 2",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 10994
    },
    {
        "adult": false,
        "backdrop_path": "/3Q4VQS7di4s56Ut7iJ3cMOqph3j.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 1097653,
        "original_language": "es",
        "original_title": "El Hogar",
        "overview": "",
        "popularity": 77.808,
        "poster_path": "/7jAU8PoS80O8ojsk6mMhF3Sekle.jpg",
        "release_date": "2022-10-31",
        "title": "El Hogar",
        "video": false,
        "vote_average": 5,
        "vote_count": 2
    },
    {
        "adult": false,
        "backdrop_path": "/fHWUxzEgCqIfToLjlY9UrR6uQtz.jpg",
        "genre_ids": [
            10751,
            14
        ],
        "id": 1047431,
        "original_language": "en",
        "original_title": "Prancer: A Christmas Tale",
        "overview": "Ten-year-old Gloria and her recently widowed grandfather Bud befriend a mysterious reindeer when the family gather for Christmas. Bud comes to believe that Prancer may actually be magical, but Gloria fears his theory will send him straight to a retirement home.",
        "popularity": 77.747,
        "poster_path": "/tJgCmwkf2ytEHYHv8vH3QtRGVPW.jpg",
        "release_date": "2022-11-22",
        "title": "Prancer: A Christmas Tale",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 12
    },
    {
        "adult": false,
        "backdrop_path": "/4PPC7fKClu0u7NTbo5xgV4vb5VD.jpg",
        "genre_ids": [
            80,
            27,
            9648
        ],
        "id": 4232,
        "original_language": "en",
        "original_title": "Scream",
        "overview": "After a series of mysterious deaths befalls their small town, an offbeat group of friends become the target of a masked killer.",
        "popularity": 77.742,
        "poster_path": "/3O3klyyYpAZBBE4n7IngzTomRDp.jpg",
        "release_date": "1996-12-20",
        "title": "Scream",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 5871
    },
    {
        "adult": false,
        "backdrop_path": "/3MF0ADRkiNkhklmCo9o4zTT39Mj.jpg",
        "genre_ids": [
            35,
            12,
            878
        ],
        "id": 550988,
        "original_language": "en",
        "original_title": "Free Guy",
        "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
        "popularity": 77.662,
        "poster_path": "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
        "release_date": "2021-08-11",
        "title": "Free Guy",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 7172
    },
    {
        "adult": false,
        "backdrop_path": "/fMkfImQS9ZRRQbsKfeORnpyLMNL.jpg",
        "genre_ids": [
            18
        ],
        "id": 107406,
        "original_language": "it",
        "original_title": "Quando l'amore è oscenità",
        "overview": "The film presents an array of nasty stuff like, intercourse with a tree branch, candle masturbation, whipping, orgies, toe masturbation, and a woman screwing around with a real corn cob.",
        "popularity": 77.614,
        "poster_path": "/gIEqumdBvEBGZXPvAAuPHu8Z8r2.jpg",
        "release_date": "1980-02-14",
        "title": "Oscenità",
        "video": false,
        "vote_average": 7,
        "vote_count": 20
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            10749
        ],
        "id": 502242,
        "original_language": "ko",
        "original_title": "미용실 특별한 서비스 2",
        "overview": "There is a special hair salon to satisfy from head to toe! Hyejin, who worked at a hairdresser who is famous as a decadent place. At first, I was reluctant to be served by my body, but from the moment I actively covet the guest. Hye-jin is a winner and winner of the special know-how of the president. But the new sex machine Zhuhei begins to take over all the guests with a tireless stamina.",
        "popularity": 77.56,
        "poster_path": "/5qFTCvx1h1CsHqbAuqo68J8GSub.jpg",
        "release_date": "2018-02-13",
        "title": "Beauty Salon: Special Service 2",
        "video": false,
        "vote_average": 7,
        "vote_count": 4
    },
    {
        "adult": false,
        "backdrop_path": "/xdFi3dVbWiCvPVAQJMKwY9OnNeg.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 534171,
        "original_language": "ko",
        "original_title": "동창회의 목적 2",
        "overview": "I am a teacher! And you are a student! During school days, the first girl Daebeom fell in love with was a practice teacher. He hit on her daringly but she did nothing but treat him like a child. Grown up Daebeom always wants to see her again and one day he heard news that she will attend this alumni reunion. Daebeom decides to seduce her at the reunion. I should sleep with her!",
        "popularity": 77.539,
        "poster_path": "/iLzUj5gGtJbAIfbPaS3v0ITZhmD.jpg",
        "release_date": "2017-08-31",
        "title": "Purpose of Reunion 2",
        "video": false,
        "vote_average": 5.3,
        "vote_count": 4
    },
    {
        "adult": false,
        "backdrop_path": "/a9ykRAWtQnI3SsZDfh8sCJo5cWI.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            12
        ],
        "id": 425,
        "original_language": "en",
        "original_title": "Ice Age",
        "overview": "With the impending ice age almost upon them, a mismatched trio of prehistoric critters – Manny the woolly mammoth, Diego the saber-toothed tiger and Sid the giant sloth – find an orphaned infant and decide to return it to its human parents. Along the way, the unlikely allies become friends but, when enemies attack, their quest takes on far nobler aims.",
        "popularity": 77.314,
        "poster_path": "/gLhHHZUzeseRXShoDyC4VqLgsNv.jpg",
        "release_date": "2002-03-10",
        "title": "Ice Age",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 11964
    },
    {
        "adult": false,
        "backdrop_path": "/dB0CxRwLXJoOrRPUvsJjb2hnPtq.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 624860,
        "original_language": "en",
        "original_title": "The Matrix Resurrections",
        "overview": "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
        "popularity": 77.282,
        "poster_path": "/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
        "release_date": "2021-12-16",
        "title": "The Matrix Resurrections",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 4736
    },
    {
        "adult": false,
        "backdrop_path": "/fvUmnxS9xaUUl0eWygvcA1hPdTV.jpg",
        "genre_ids": [
            80,
            53,
            10770
        ],
        "id": 801335,
        "original_language": "en",
        "original_title": "Girl in the Basement",
        "overview": "Sara is a teen girl who is looking forward to her 18th birthday to move away from her controlling father Don. But before she could even blow out the candles, Don imprisons her in the basement of their home.",
        "popularity": 77.261,
        "poster_path": "/qmddUxRwbsxHa7oEXm4PWh1KZe8.jpg",
        "release_date": "2021-02-27",
        "title": "Girl in the Basement",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 502
    },
    {
        "adult": false,
        "backdrop_path": "/fI8hv1IqWUIUjx4YRfl6TWhdqHW.jpg",
        "genre_ids": [
            28,
            18,
            9648,
            53
        ],
        "id": 626872,
        "original_language": "ko",
        "original_title": "비상선언",
        "overview": "While investigating a terroristic threat that goes viral online, Korean authorities discover that a suspect has recently boarded an international flight bound for the United States. When a healthy passenger on the same flight suddenly dies a gruesome death of unknown cause, panic erupts both in-flight and on the ground. With steadily decreasing fuel and international refusals to offer aid, the captain and crew will be forced to take unprecedented emergency measures in an attempt to save the lives of their passengers.",
        "popularity": 77.175,
        "poster_path": "/hxxtBWo50hwD37Q5cLEzaSDVyKZ.jpg",
        "release_date": "2022-08-03",
        "title": "Emergency Declaration",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 233
    },
    {
        "adult": false,
        "backdrop_path": "/ohA52MfB8xKO54sjgUxFgAQ0BE.jpg",
        "genre_ids": [
            18
        ],
        "id": 10867,
        "original_language": "it",
        "original_title": "Malèna",
        "overview": "During WWII, a teenage boy discovering himself becomes love-stricken by Malèna, a sensual woman living in a small, narrow-minded Italian town.",
        "popularity": 77.166,
        "poster_path": "/buHqp8EkL3euRffvD1lQLVZqsFz.jpg",
        "release_date": "2000-03-16",
        "title": "Malena",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 1916
    },
    {
        "adult": false,
        "backdrop_path": "/gYtXT7fJNBRZBbBulO11DoRveLT.jpg",
        "genre_ids": [
            18,
            35
        ],
        "id": 400928,
        "original_language": "en",
        "original_title": "Gifted",
        "overview": "Frank, a single man raising his child prodigy niece Mary, is drawn into a custody battle with his mother.",
        "popularity": 76.993,
        "poster_path": "/7YB2YrMwIm1g8FyZtlvmVDfRnAT.jpg",
        "release_date": "2017-04-12",
        "title": "Gifted",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 4798
    },
    {
        "adult": false,
        "backdrop_path": "/mUC2BS04DlszdqJQ9vz9MFuPiDd.jpg",
        "genre_ids": [
            16,
            28,
            14
        ],
        "id": 20982,
        "original_language": "ja",
        "original_title": "劇場版 NARUTO -ナルト- 疾風伝",
        "overview": "Demons that once almost destroyed the world, are revived by someone. To prevent the world from being destroyed, the demon has to be sealed and the only one who can do it is the shrine maiden Shion from the country of demons, who has two powers; one is sealing demons and the other is predicting the deaths of humans. This time Naruto's mission is to guard Shion, but she predicts Naruto's death. The only way to escape it, is to get away from Shion, which would leave her unguarded, then the demon, whose only goal is to kill Shion will do so, thus meaning the end of the world. Naruto decides to challenge this \"prediction of death.\"",
        "popularity": 76.908,
        "poster_path": "/vDkct38sSFSWJIATlfJw0l3QOIR.jpg",
        "release_date": "2007-08-04",
        "title": "Naruto Shippuden the Movie",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 667
    },
    {
        "adult": false,
        "backdrop_path": "/mwlLjL3jTDmTdLWe2PyUVqYQTuK.jpg",
        "genre_ids": [
            18,
            80,
            53
        ],
        "id": 22803,
        "original_language": "en",
        "original_title": "Law Abiding Citizen",
        "overview": "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free. He targets not only the killer but also the district attorney and others involved in the deal.",
        "popularity": 76.819,
        "poster_path": "/fcEXcip7v0O1ndV4VUdFqJSqbOg.jpg",
        "release_date": "2009-10-15",
        "title": "Law Abiding Citizen",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 4423
    },
    {
        "adult": false,
        "backdrop_path": "/9bColKVEAaWfmOLiLZoUhdYfevy.jpg",
        "genre_ids": [
            16,
            10751,
            35,
            878
        ],
        "id": 1010818,
        "original_language": "en",
        "original_title": "Groot's First Steps",
        "overview": "Following the events of “Guardians of the Galaxy Vol. 1,” Baby Groot is finally ready to try taking his first steps out of his pot—only to learn you have to walk before you can run.",
        "popularity": 76.778,
        "poster_path": "/1ifiV9ZJD4tC3tRYcnLIzH0meaB.jpg",
        "release_date": "2022-08-10",
        "title": "Groot's First Steps",
        "video": false,
        "vote_average": 7,
        "vote_count": 272
    },
    {
        "adult": false,
        "backdrop_path": "/uRNgkJSkNBFbbn9fPsEjDIy8Sh3.jpg",
        "genre_ids": [
            12,
            14,
            28
        ],
        "id": 22,
        "original_language": "en",
        "original_title": "Pirates of the Caribbean: The Curse of the Black Pearl",
        "overview": "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
        "popularity": 76.535,
        "poster_path": "/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
        "release_date": "2003-07-09",
        "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 18743
    },
    {
        "adult": false,
        "backdrop_path": "/8ybdSPM1AutUK48gmMPOfu8TcyB.jpg",
        "genre_ids": [
            18,
            28,
            878
        ],
        "id": 518896,
        "original_language": "zh",
        "original_title": "明日戰記",
        "overview": "When a meteor carrying a destructive plant strikes the world, a suicide squad is given hours to save their post-apocalyptic city from total collapse.",
        "popularity": 76.497,
        "poster_path": "/2l9LbxBSkJseoxYcIJjclnmxyq.jpg",
        "release_date": "2022-08-05",
        "title": "Warriors of Future",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 298
    },
    {
        "adult": false,
        "backdrop_path": "/9zXPnbVpaDfTniLBuc5vgXGfzAP.jpg",
        "genre_ids": [
            28,
            53,
            80
        ],
        "id": 818397,
        "original_language": "en",
        "original_title": "Memory",
        "overview": "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
        "popularity": 76.276,
        "poster_path": "/4Q1n3TwieoULnuaztu9aFjqHDTI.jpg",
        "release_date": "2022-04-28",
        "title": "Memory",
        "video": false,
        "vote_average": 7,
        "vote_count": 1208
    },
    {
        "adult": false,
        "backdrop_path": "/o76ZDm8PS9791XiuieNB93UZcRV.jpg",
        "genre_ids": [
            27,
            878,
            28
        ],
        "id": 460458,
        "original_language": "en",
        "original_title": "Resident Evil: Welcome to Raccoon City",
        "overview": "Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.",
        "popularity": 76.208,
        "poster_path": "/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg",
        "release_date": "2021-11-24",
        "title": "Resident Evil: Welcome to Raccoon City",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 2052
    },
    {
        "adult": false,
        "backdrop_path": "/wyvUmyzqGOBDyqLHRSukGDjI7bH.jpg",
        "genre_ids": [
            18
        ],
        "id": 50014,
        "original_language": "en",
        "original_title": "The Help",
        "overview": "Aibileen Clark is a middle-aged African-American maid who has spent her life raising white children and has recently lost her only son; Minny Jackson is an African-American maid who has often offended her employers despite her family's struggles with money and her desperate need for jobs; and Eugenia \"Skeeter\" Phelan is a young white woman who has recently moved back home after graduating college to find out her childhood maid has mysteriously disappeared. These three stories intertwine to explain how life in Jackson, Mississippi revolves around \"the help\"; yet they are always kept at a certain distance because of racial lines.",
        "popularity": 76.053,
        "poster_path": "/3kmfoWWEc9Vtyuaf9v5VipRgdjx.jpg",
        "release_date": "2011-08-09",
        "title": "The Help",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 7210
    },
    {
        "adult": false,
        "backdrop_path": "/921vUyXdfIYpaXqu5Lnf3nVb4IJ.jpg",
        "genre_ids": [
            16,
            28,
            14
        ],
        "id": 810693,
        "original_language": "ja",
        "original_title": "劇場版 呪術廻戦 0",
        "overview": "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
        "popularity": 75.694,
        "poster_path": "/23oJaeBh0FDk2mQ2P240PU9Xxfh.jpg",
        "release_date": "2021-12-24",
        "title": "Jujutsu Kaisen 0",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 914
    },
    {
        "adult": false,
        "backdrop_path": "/9il7qNbeYnPMYlutsVYDsj4hRyb.jpg",
        "genre_ids": [
            18
        ],
        "id": 480530,
        "original_language": "en",
        "original_title": "Creed II",
        "overview": "Between personal obligations and training for his next big fight against an opponent with ties to his family's past, Adonis Creed is up against the challenge of his life.",
        "popularity": 75.674,
        "poster_path": "/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg",
        "release_date": "2018-11-21",
        "title": "Creed II",
        "video": false,
        "vote_average": 7,
        "vote_count": 4805
    },
    {
        "adult": false,
        "backdrop_path": "/l4oOfCiMqIaaL0Vyx8dnu4FENra.jpg",
        "genre_ids": [
            28,
            16,
            14
        ],
        "id": 66105,
        "original_language": "ja",
        "original_title": "聖闘士星矢 真紅の少年伝説",
        "overview": "Athena receives the visit of Phoebus Abel, her older brother and God of the Corona. He informs her that he has come to destroy humanity as punishment for their corruption, just as it was done in ancient times. He dismisses Seiya and the Bronze Saints, as she will now be guarded by Abel's three Corona Saints, Atlas of Carina, Jaow of Lynx and Berenike of Coma Berenices, and the five resurrected Gold Saints who died in the Sanctuary battle: Saga of Gemini, Deathmask of Cancer, Shura of Capricorn, Camus of Aquarius and Aphrodite of Pisces. When Athena rebels against Abel's plan, he attacks her, sending her soul to Elysion, the final resting place from which there is no return. The Bronze Saints immediately rush to the Sanctuary to save her and ultimately overcome Abel.",
        "popularity": 75.598,
        "poster_path": "/qDqk23o8qOljUetnCkQCQk7kElk.jpg",
        "release_date": "1988-07-23",
        "title": "Saint Seiya: Legend of Crimson Youth",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 161
    },
    {
        "adult": false,
        "backdrop_path": "/8UcyraT9NtIcTzJCqn90cAHWsEq.jpg",
        "genre_ids": [
            9648,
            53,
            27
        ],
        "id": 982620,
        "original_language": "en",
        "original_title": "Maneater",
        "overview": "A group of friends on vacation in a seeming island paradise are stalked by an unrelenting great white after an accident leaves them stranded and left for dead.",
        "popularity": 75.524,
        "poster_path": "/pwf3DGuWB1AptvIzHhlGxDUNnQX.jpg",
        "release_date": "2022-08-26",
        "title": "Maneater",
        "video": false,
        "vote_average": 4.9,
        "vote_count": 45
    },
    {
        "adult": false,
        "backdrop_path": "/707thQazLJiYLBhCrZlRoV05NNL.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 948276,
        "original_language": "fr",
        "original_title": "Balle perdue 2",
        "overview": "Having cleared his name, genius mechanic Lino has only one goal in mind: getting revenge on the corrupt cops who killed his brother and his mentor.",
        "popularity": 75.386,
        "poster_path": "/uAeZI1JJbLPq7Bu5dziH7emHeu7.jpg",
        "release_date": "2022-11-10",
        "title": "Lost Bullet 2",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 276
    },
    {
        "adult": false,
        "backdrop_path": "/yy43Y8rkHJn5qbWRSlYexpJIjn9.jpg",
        "genre_ids": [
            53,
            10749
        ],
        "id": 1003813,
        "original_language": "en",
        "original_title": "Out of the Blue",
        "overview": "After spending time in prison following an assault charge, Connor Bates now works in a library and spends his free time running, swimming, and trying to piece his world back together. When he meets Marilyn Chambers, the wife of a wealthy businessman, they collide into an intense physical and emotional relationship that quickly escalates into idle talk about her husband’s murder.",
        "popularity": 75.169,
        "poster_path": "/eIESpJgaGrAY1sABjBrBtgkd7hM.jpg",
        "release_date": "2022-08-26",
        "title": "Out of the Blue",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 39
    },
    {
        "adult": false,
        "backdrop_path": "/rXFe9rYsq4j1zEiOivJoUfdWsuR.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 880841,
        "original_language": "en",
        "original_title": "Abandoned",
        "overview": "After a young couple moves into a remote farmhouse with their infant son, the woman's struggles with postpartum psychosis begin to intensify... as the house reveals secrets of its own.",
        "popularity": 75.158,
        "poster_path": "/cO9ywQ2AMHM9EoBJsJGH1Gl9U5L.jpg",
        "release_date": "2022-06-17",
        "title": "Abandoned",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 223
    }
]

const genres_arr = {
    'Action' : 28,
    'Adventure' : 12,
    'Animation' : 16,
    'Comedy' : 35,
    'Crime' : 80,
    'Documentary' : 99,
    'Drama' : 18,
    'Family' : 10751,
    'Fantasy' : 14,
    'History' : 36,
    'Horror' : 27,
    'Music' : 10402,
    'Mystery' : 9648,
    'Romance' : 10749,
    'Sci-Fi' :  878,
    'TV Movie' : 10770,
    'Thriller' : 53,
    'War' : 10752,
    'Western' : 37
};


function Movies({genre}){
    const [selectedMovies , setSelectedMovies] = useState(results);
    const navigate = useNavigate();
    const rec_gen_id = genres_arr[genre];

    useEffect(() => {
        const temp = [];
        selectedMovies.map((movie) => {
            for(let i = 0 ; i < movie.genre_ids.length ; i++){
                if(movie.genre_ids[i] == rec_gen_id){
                    temp.push(movie);
                    break;
                }
            }
        })
        setSelectedMovies(temp);
    } , []);

    function handleClick(movieTitle,movieOverview,movieDate,movieRating,movieVoteCount,moviePosterPath,movieAdult,movieGenres){
        const movieDetails = {Title : movieTitle , Overview : movieOverview , Date : movieDate , Rating : movieRating , VoteCount : movieVoteCount , Poster : moviePosterPath , Adult : movieAdult , Genres : movieGenres};
        navigate("/trailer" , {state : {data : movieDetails}});
    }

    return (
        <div className = "movie__list">
            <h2 className = "list__title">{genre} MOVIES RECOMMENDATIONS</h2>
            <div className = "list__cards">
                {
                    selectedMovies.map(movie => (
                        <div className = "cards">
                            <img className = "cards__img" src = {`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                            <div className = "cards__overlay">
                                <img className = "playbutton" src = {play_button} alt = "Play" onClick = {() => handleClick(movie.original_title,movie.overview,movie.release_date,movie.vote_average,movie.vote_count,movie.poster_path,movie.adult,movie.genre_ids)}/>
                                <div className = "card__title">{movie?movie.original_title:""}</div>
                                <div className = "card__runtime">
                                    {movie?movie.release_date:""}
                                    <span className = "card__rating">{movie?movie.vote_average:""}<i className = "fas fa-star" /></span>
                                </div>
                                <div className = "card__description">{movie ? movie.overview.slice(0,90)+"..." : ""}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Movies;