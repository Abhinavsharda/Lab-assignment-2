var text = ["In a world populated by anthropomorphic vehicles, the last race of the Piston Cup championship ends in a three-way tie between retiring veteran Strip The King Weathers, infamous runner-up Chick Hicks, and rookie Lightning McQueen. The tiebreaker race is scheduled for one week later at the (fictional) Los Angeles International Speedway in California. Lightning is desperate to win the race, since it would not only make him the first rookie to win a championship, but also allow him to leave the unglamorous sponsorship of Rust-Eze and allow him to take The King's place as the sponsored car of the lucrative Dinoco team. Eager to start practice in California as soon as possible, he pushes his big rig, Mack, to travel all night long. While McQueen is sleeping, the exhausted Mack drifts off and is startled by a gang of four reckless street racers, causing McQueen to fall out the back of the trailer and onto the road. McQueen wakes in the middle of traffic and speeds off the highway to find Mack, only to end up in the run-down desert town of Radiator Springs, while inadvertently ruining the pavement of its main road.",
            "After being arrested and impounded overnight (while guarded by a rusty, but friendly, tow truck named Mater), McQueen is ordered by the town judge, Doc Hudson, to leave town immediately. The local lawyer Sally Carrera requests that McQueen should instead be given community service to repave the road, to which Doc reluctantly agrees. McQueen tries to repave it in a single day, but it turns out to be shoddy and he is ordered to repave the road again, which takes several days to complete. During this time, he becomes friends with several of the cars, and learns that Radiator Springs used to be a popular stopover along the old U.S. Route 66, but with the construction of Interstate 40 bypassing it, the town literally vanished from the map. McQueen also discovers that Doc is really the Fabulous Hudson Hornet, a three-time Piston Cup winner who was forced out of racing after an accident in 1954 and quickly forgotten by the sport. McQueen finishes the road, which has invigorated the cars to improve their town, and spends an extra day in town with his new friends, before Mack and the media descend on the town, led by a tip to McQueen's location. McQueen reluctantly leaves with the media to get to California in time for the race, while Sally chastises Doc after discovering that he had tipped off the media to McQueen's whereabouts, not wanting to be discovered by them instead.",
            "At the speedway, McQueen's mind is not fully set on the race, and he soon falls into last place. He is surprised to discover that Doc Hudson, who is decked out in his old racing colors, has taken over as his crew chief, along with several other friends from Radiator Springs to help in the pit. Inspired and recalling tricks he learned from Doc and his friends, McQueen quickly emerges to lead the race into the final laps. Refusing to lose, Hicks sends Weathers into a dangerous spin, causing him to have an accident. Seeing this and recalling Doc's fate, McQueen stops just short of the finish line, allowing Hicks to win, and drives back to push Weathers over the finish line. The crowd and media condemn Hicks' victory and give praise to McQueen's sportsmanship. Though offered the Dinoco sponsorship deal, McQueen declines, insisting on staying with his current sponsors as an appreciation of their past support. Later, back at Radiator Springs, McQueen returns and announces that he will be setting up his headquarters there, helping to put Radiator Springs back on the map"];
            
(function(){
    var temp = document.body.id;
    switch(temp){
        case "p1":
        document.getElementById('textHere').innerHTML = text[0];
        break;
        case "p2":
        document.getElementById('textHere').innerHTML = text[1];
        break;
        case "p3":
        document.getElementById('textHere').innerHTML = text[2];
        break;
        default:
        alert("Page not found");
    }
})();