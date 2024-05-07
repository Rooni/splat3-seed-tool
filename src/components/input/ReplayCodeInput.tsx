import {Divider, HStack, PinInput, PinInputField} from "@chakra-ui/react"

// https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/replay/RL68URL749NP2U4G
// {
//     "code": "RL68URL749NP2U4G",
//     "share_url": "https://s.nintendo.com/av5ja-lp1/znca/game/4834290508791808?p=%2Freplay%3Fcode%3DRL68-URL7-49NP-2U4G",
//     "replay": {
//         "id": "UmVwbGF5LXUtYWdnYWl3aWVla256aHpybnJubW06Ukw2OFVSTDc0OU5QMlU0Rw==",
//         "historyDetail": {
//             "vsMode": {
//                 "mode": "X_MATCH",
//                 "name": "X Battle",
//                 "id": "VnNNb2RlLTM="
//             },
//             "leagueMatch": null,
//             "vsRule": {
//                 "name": "Clam Blitz",
//                 "id": "VnNSdWxlLTQ="
//             },
//             "vsStage": {
//                 "name": "Mahi-Mahi Resort",
//                 "id": "VnNTdGFnZS0xMg=="
//             },
//             "playedTime": "2024-04-29T16:17:58Z",
//             "judgement": "LOSE",
//             "player": {
//                 "weapon": {
//                     "name": ".52 Gal Deco",
//                     "image": {
//                         "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/weapon_illust/a60954b1d9bfdd8fa0e3191e9886d09bf75a99116c2189655d09029d03ff5dfa_1.png"
//                     },
//                     "id": "V2VhcG9uLTUx"
//                 },
//                 "festGrade": null,
//                 "id": "VnNQbGF5ZXItdS1hZ2dhaXdpZWVrbnpoenJucm5tbTo6MjAyNDA0MjlUMTYxMjI1XzJlMTZiZmI0LTU2MjItNDE5YS1iMGQ5LWY4OTI5ZmUyMmEzZTp1LWFnZ2Fpd2llZWtuemh6cm5ybm1t",
//                 "__isPlayer": "VsPlayer",
//                 "byname": "Limited-Edition Cat",
//                 "name": "Rooni",
//                 "nameId": "1725",
//                 "nameplate": {
//                     "badges": [
//                         {
//                             "image": {
//                                 "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/badge_img/e95dfb8450abd5571dcbd77c842a815276eed7a54db6cdbd4fc364bb42c3ca49_0.png"
//                             },
//                             "id": "QmFkZ2UtMzEwMDIwMA=="
//                         },
//                         {
//                             "image": {
//                                 "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/badge_img/26ec96280c07332d162b8f19fd55cd66facbbf29a9e15ca39106958c573c1f08_0.png"
//                             },
//                             "id": "QmFkZ2UtNTIwMDA4MA=="
//                         },
//                         {
//                             "image": {
//                                 "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/badge_img/771251325d382cc568d3bc66ef38992394da27c1080cef18d02c1a87b1f8e47f_0.png"
//                             },
//                             "id": "QmFkZ2UtMTAxMTEwMQ=="
//                         }
//                     ],
//                     "background": {
//                         "textColor": {
//                             "a": 1,
//                             "b": 1,
//                             "g": 1,
//                             "r": 1
//                         },
//                         "image": {
//                             "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/npl_img/6fcbe7a8a0912726eb7ef07fe324f4e2e58be99015c0e1ade4e7f9288b4ec000_0.png"
//                         },
//                         "id": "TmFtZXBsYXRlQmFja2dyb3VuZC0xNTA1OQ=="
//                     }
//                 },
//                 "headGear": {
//                     "name": "SV925 Circle Shades",
//                     "image": {
//                         "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/gear_img/979bc0c4772ed06b0229b99244985266eaf796a04195a300f2121174b82d6a37_1.png"
//                     },
//                     "__isGear": "HeadGear",
//                     "primaryGearPower": {
//                         "name": "Swim Speed Up",
//                         "image": {
//                             "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/skill_img/087ffffe40c28a40a39dc4a577c235f4cc375540c79dfa8ede1d8b63a063f261_0.png"
//                         }
//                     },
//                     "additionalGearPowers": [
//                         {
//                             "name": "Sub Resistance Up",
//                             "image": {
//                                 "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/skill_img/664489b24e668ef1937bfc9a80a8cf9cf4927b1e16481fa48e7faee42122996d_0.png"
//                             }
//                         },
//                         {
//                             "name": "Sub Resistance Up",
//                             "image": {
//                                 "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/skill_img/664489b24e668ef1937bfc9a80a8cf9cf4927b1e16481fa48e7faee42122996d_0.png"
//                             }
//                         },
//                         {
//                             "name": "Ink Resistance Up",
//                             "image": {
//                                 "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/skill_img/db36f7e89194ed642f53465abfa449669031a66d7538135c703d3f7d41f99c0d_0.png"
//                             }
//                         }
//                     ]
//                 },
//                 "clothingGear": {
//                     "name": "Frivolous Paw Suit",
//                     "image": {
//                         "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/gear_img/39a5d7f5e697fc1b0b2a9956da42df8a217cd0b8fb48048d8aafa1ed3e4912a8_1.png"
//                     },
//                     "__isGear": "ClothingGear",
//                     "primaryGearPower": {
//                         "name": "Ninja Squid",
//                         "image": {
//                             "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/skill_img/2c0ef71abfb3efe0e67ab981fc9cd46efddcaf93e6e20da96980079f8509d05d_0.png"
//                         }
//                     },
//                     "additionalGearPowers": [
//                         {
//                             "name": "Quick Super Jump",
//                             "image": {
//                                 "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/skill_img/138820ed46d68bdf2d7a21fb3f74621d8fc8c2a7cb6abe8d7c1a3d7c465108a7_0.png"
//                             }
//                         },
//                         {
//                             "name": "Special Saver",
//                             "image": {
//                                 "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/skill_img/e3154ab67494df2793b72eabf912104c21fbca71e540230597222e766756b3e4_0.png"
//                             }
//                         },
//                         {
//                             "name": "Ink Resistance Up",
//                             "image": {
//                                 "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/skill_img/db36f7e89194ed642f53465abfa449669031a66d7538135c703d3f7d41f99c0d_0.png"
//                             }
//                         }
//                     ]
//                 },
//                 "shoesGear": {
//                     "name": "Pearlescent Kicks",
//                     "image": {
//                         "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/gear_img/b734219029d5d560cfeebbbc2b12e57c70b430c7d173c8e85e1845f89866702a_1.png"
//                     },
//                     "__isGear": "ShoesGear",
//                     "primaryGearPower": {
//                         "name": "Stealth Jump",
//                         "image": {
//                             "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/skill_img/f9c21eacf6dbc1d06edbe498962f8ed766ab43cb1d63806f3731bf57411ae7b6_0.png"
//                         }
//                     },
//                     "additionalGearPowers": [
//                         {
//                             "name": "Swim Speed Up",
//                             "image": {
//                                 "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/skill_img/087ffffe40c28a40a39dc4a577c235f4cc375540c79dfa8ede1d8b63a063f261_0.png"
//                             }
//                         },
//                         {
//                             "name": "Swim Speed Up",
//                             "image": {
//                                 "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/skill_img/087ffffe40c28a40a39dc4a577c235f4cc375540c79dfa8ede1d8b63a063f261_0.png"
//                             }
//                         },
//                         {
//                             "name": "Swim Speed Up",
//                             "image": {
//                                 "url": "https://splatoon3-replay-lookup.fancy.org.uk/api/splatnet3/resources/prod/v2/skill_img/087ffffe40c28a40a39dc4a577c235f4cc375540c79dfa8ede1d8b63a063f261_0.png"
//                             }
//                         }
//                     ]
//                 }
//             },
//             "knockout": "NEITHER",
//             "myTeam": {
//                 "result": {
//                     "paintPoint": null,
//                     "score": 30
//                 }
//             },
//             "id": "VnNIaXN0b3J5RGV0YWlsLXUtYWdnYWl3aWVla256aHpybnJubW06OjIwMjQwNDI5VDE2MTIyNV8yZTE2YmZiNC01NjIyLTQxOWEtYjBkOS1mODkyOWZlMjJhM2U=",
//             "awards": [
//                 {
//                     "name": "#1 Score Booster"
//                 },
//                 {
//                     "name": "#1 Turf Inker"
//                 },
//                 {
//                     "name": "#1 Damage Taker"
//                 }
//             ]
//         },
//         "replayCode": "RL68URL749NP2U4G"
//     },
//     "request_id": "2805ee5182dd44c5114a1e6cfa57b2bcbbe9173c7e52069cc85a518de49c2191",
//     "npln_user_id": "u-aggaiwieeknzhzrnrnmm"
// }
export const ReplayCodeInput = () => {
  return (
    <HStack>
      <PinInput type='alphanumeric'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />

        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />

        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />

        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  )
}