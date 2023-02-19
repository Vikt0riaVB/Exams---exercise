function seriesCalculator(input) {
    let name = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let time = Number(input[3]);

    let ads = time * 0.2;
    let episodeWithAds = time + ads;
    let specialEpisode = seasons * 10;

    let totalTimeToWatch = episodeWithAds * episodes * seasons + specialEpisode;
    console.log(`Total time needed to watch the ${name} series is ${totalTimeToWatch} minutes.`);
}
seriesCalculator((["Lucifer",
"3",
"18",
"55"]))