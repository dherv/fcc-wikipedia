// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get(`https://en.wikipedia.org/w/api.php`, (req, res, ctx) => {
    const query = req.url.searchParams;
    const search = query.get("gsrsearch");

    if (search === "meaning")
      return res(
        ctx.status(200),
        ctx.set({ "Access-Control-Allow-Origin": "*" }),
        ctx.json({
          batchcomplete: "",
          continue: {
            gsroffset: 10,
            continue: "gsroffset||",
          },
          query: {
            pages: {
              61699583: {
                pageid: 61699583,
                ns: 0,
                title: "Leaving Meaning",
                index: 10,
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-04-29T15:57:26Z",
                lastrevid: 1009459038,
                length: 12899,
                fullurl: "https://en.wikipedia.org/wiki/Leaving_Meaning",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Leaving_Meaning&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/Leaving_Meaning",
              },
              55842515: {
                pageid: 55842515,
                ns: 0,
                title: "Maps of Meaning",
                index: 4,
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-04-29T15:39:12Z",
                lastrevid: 1016227699,
                length: 14922,
                fullurl: "https://en.wikipedia.org/wiki/Maps_of_Meaning",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Maps_of_Meaning&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/Maps_of_Meaning",
              },
              18916: {
                pageid: 18916,
                ns: 0,
                title: "Meaning",
                index: 1,
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-04-18T03:33:26Z",
                lastrevid: 1018445497,
                length: 1645,
                fullurl: "https://en.wikipedia.org/wiki/Meaning",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Meaning&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/Meaning",
              },
              4102640: {
                pageid: 4102640,
                ns: 0,
                title: "Meaning (philosophy)",
                index: 9,
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-04-29T13:18:13Z",
                lastrevid: 1017692173,
                length: 48467,
                fullurl: "https://en.wikipedia.org/wiki/Meaning_(philosophy)",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Meaning_(philosophy)&action=edit",
                canonicalurl:
                  "https://en.wikipedia.org/wiki/Meaning_(philosophy)",
              },
              20347: {
                pageid: 20347,
                ns: 0,
                title: "Meaning of life",
                index: 3,
                thumbnail: {
                  source:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Paul_Gauguin_-_D%27ou_venons-nous.jpg/50px-Paul_Gauguin_-_D%27ou_venons-nous.jpg",
                  width: 50,
                  height: 19,
                },
                pageimage: "Paul_Gauguin_-_D'ou_venons-nous.jpg",
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-05-05T04:56:14Z",
                lastrevid: 1017510428,
                length: 145168,
                fullurl: "https://en.wikipedia.org/wiki/Meaning_of_life",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Meaning_of_life&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/Meaning_of_life",
              },
              18839: {
                pageid: 18839,
                ns: 0,
                title: "Music",
                index: 6,
                thumbnail: {
                  source:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fran%C3%A7ois_Boucher%2C_Allegory_of_Music%2C_1764%2C_NGA_32680.jpg/50px-Fran%C3%A7ois_Boucher%2C_Allegory_of_Music%2C_1764%2C_NGA_32680.jpg",
                  width: 50,
                  height: 40,
                },
                pageimage:
                  "François_Boucher,_Allegory_of_Music,_1764,_NGA_32680.jpg",
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-05-01T06:51:01Z",
                lastrevid: 1020472710,
                length: 145586,
                fullurl: "https://en.wikipedia.org/wiki/Music",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Music&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/Music",
              },
              21663: {
                pageid: 21663,
                ns: 0,
                title: "Nihilism",
                index: 7,
                thumbnail: {
                  source:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Philbar_3.png/50px-Philbar_3.png",
                  width: 50,
                  height: 34,
                },
                pageimage: "Philbar_3.png",
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-05-05T02:16:58Z",
                lastrevid: 1021456435,
                length: 88933,
                fullurl: "https://en.wikipedia.org/wiki/Nihilism",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Nihilism&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/Nihilism",
              },
              29107: {
                pageid: 29107,
                ns: 0,
                title: "Semantics",
                index: 8,
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-05-01T14:49:00Z",
                lastrevid: 1018597564,
                length: 21123,
                fullurl: "https://en.wikipedia.org/wiki/Semantics",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Semantics&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/Semantics",
              },
              1754283: {
                pageid: 1754283,
                ns: 0,
                title: "The Meaning of Meaning",
                index: 2,
                thumbnail: {
                  source:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ogden_semiotic_triangle.png/50px-Ogden_semiotic_triangle.png",
                  width: 50,
                  height: 39,
                },
                pageimage: "Ogden_semiotic_triangle.png",
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-04-29T13:10:50Z",
                lastrevid: 1012323333,
                length: 4370,
                fullurl: "https://en.wikipedia.org/wiki/The_Meaning_of_Meaning",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=The_Meaning_of_Meaning&action=edit",
                canonicalurl:
                  "https://en.wikipedia.org/wiki/The_Meaning_of_Meaning",
              },
              42953756: {
                pageid: 42953756,
                ns: 0,
                title: "Will to meaning",
                index: 5,
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-04-12T23:49:22Z",
                lastrevid: 933249806,
                length: 199,
                fullurl: "https://en.wikipedia.org/wiki/Will_to_meaning",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Will_to_meaning&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/Will_to_meaning",
              },
            },
          },
        })
      );

    if (search === "movie")
      return res(
        ctx.status(200),
        ctx.set({ "Access-Control-Allow-Origin": "*" }),
        ctx.json({
          batchcomplete: "",
          continue: {
            gsroffset: 10,
            continue: "gsroffset||",
          },
          query: {
            pages: {
              105391: {
                pageid: 105391,
                ns: 0,
                title: "B movie",
                index: 4,
                thumbnail: {
                  source:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/RavenPoster.jpg/33px-RavenPoster.jpg",
                  width: 33,
                  height: 50,
                },
                pageimage: "RavenPoster.jpg",
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-04-30T00:31:55Z",
                lastrevid: 1017788910,
                length: 113434,
                fullurl: "https://en.wikipedia.org/wiki/B_movie",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=B_movie&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/B_movie",
              },
              2599685: {
                pageid: 2599685,
                ns: 0,
                title: "Dinner and a Movie",
                index: 7,
                thumbnail: {
                  source:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Dinner_%26_a_Movie_logo.jpg/50px-Dinner_%26_a_Movie_logo.jpg",
                  width: 50,
                  height: 35,
                },
                pageimage: "Dinner_&_a_Movie_logo.jpg",
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-04-27T23:20:36Z",
                lastrevid: 989966874,
                length: 3118,
                fullurl: "https://en.wikipedia.org/wiki/Dinner_and_a_Movie",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Dinner_and_a_Movie&action=edit",
                canonicalurl:
                  "https://en.wikipedia.org/wiki/Dinner_and_a_Movie",
              },
              21555729: {
                pageid: 21555729,
                ns: 0,
                title: "Film",
                index: 1,
                thumbnail: {
                  source:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Muybridge_race_horse_animated.gif/50px-Muybridge_race_horse_animated.gif",
                  width: 50,
                  height: 33,
                },
                pageimage: "Muybridge_race_horse_animated.gif",
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-05-05T02:18:15Z",
                lastrevid: 1017945660,
                length: 65129,
                fullurl: "https://en.wikipedia.org/wiki/Film",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Film&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/Film",
              },
              2855554: {
                pageid: 2855554,
                ns: 0,
                title: "IMDb",
                index: 9,
                thumbnail: {
                  source:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/50px-IMDB_Logo_2016.svg.png",
                  width: 50,
                  height: 25,
                },
                pageimage: "IMDB_Logo_2016.svg",
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-05-03T05:24:41Z",
                lastrevid: 1020772280,
                length: 40515,
                fullurl: "https://en.wikipedia.org/wiki/IMDb",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=IMDb&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/IMDb",
              },
              9215946: {
                pageid: 9215946,
                ns: 0,
                title: "Movie Movie",
                index: 3,
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-04-12T22:40:20Z",
                lastrevid: 974093819,
                length: 10239,
                fullurl: "https://en.wikipedia.org/wiki/Movie_Movie",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Movie_Movie&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/Movie_Movie",
              },
              77819: {
                pageid: 77819,
                ns: 0,
                title: "Movie theater",
                index: 8,
                thumbnail: {
                  source:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sala_de_cine.jpg/50px-Sala_de_cine.jpg",
                  width: 50,
                  height: 28,
                },
                pageimage: "Sala_de_cine.jpg",
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-05-01T06:51:17Z",
                lastrevid: 1020091021,
                length: 74055,
                fullurl: "https://en.wikipedia.org/wiki/Movie_theater",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Movie_theater&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/Movie_theater",
              },
              277667: {
                pageid: 277667,
                ns: 0,
                title: "Scary Movie",
                index: 5,
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-04-29T13:01:38Z",
                lastrevid: 1016641669,
                length: 20278,
                fullurl: "https://en.wikipedia.org/wiki/Scary_Movie",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=Scary_Movie&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/Scary_Movie",
              },
              48893231: {
                pageid: 48893231,
                ns: 0,
                title: "The Emoji Movie",
                index: 6,
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-05-03T12:33:14Z",
                lastrevid: 1018236815,
                length: 47891,
                fullurl: "https://en.wikipedia.org/wiki/The_Emoji_Movie",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=The_Emoji_Movie&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/The_Emoji_Movie",
              },
              37864037: {
                pageid: 37864037,
                ns: 0,
                title: "The Lego Movie",
                index: 10,
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-05-05T02:18:29Z",
                lastrevid: 1021327320,
                length: 86968,
                fullurl: "https://en.wikipedia.org/wiki/The_Lego_Movie",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=The_Lego_Movie&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/The_Lego_Movie",
              },
              5072975: {
                pageid: 5072975,
                ns: 0,
                title: "The Movie",
                index: 2,
                contentmodel: "wikitext",
                pagelanguage: "en",
                pagelanguagehtmlcode: "en",
                pagelanguagedir: "ltr",
                touched: "2021-05-01T06:55:51Z",
                lastrevid: 1020785233,
                length: 3462,
                fullurl: "https://en.wikipedia.org/wiki/The_Movie",
                editurl:
                  "https://en.wikipedia.org/w/index.php?title=The_Movie&action=edit",
                canonicalurl: "https://en.wikipedia.org/wiki/The_Movie",
              },
            },
          },
        })
      );

    return res(
      ctx.status(200),
      ctx.json({
        error: {code: "missingparam", info: "The 'gsrsearch' parameter must be set."}
      })
    );
  }),
];
