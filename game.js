let start = () => {
  alert(
    `you are kenny baitlin, legendary special forces commando. you have been called out of retirement to track and kill the deadly and elusive sasquach...`
  );

  alert(
    `you are tansported by chopper and ropped of just outside of the forest. your campsite is close by. do you want to go to the campsite ?`
  );
  campPath();
};
let campPath = () => {
  let answer = prompt("type yes or no");
  if (answer == "") {
    alert(`try something`);
    start();
  } else if (answer == "yes") {
    campsite();
  } else if (answer == "no") {
    end1();
  }
};

let end1 = () => {
  alert(
    `you see smoke above the trees, your campsite was destoryed and you hear a roar, you walk away because you dont get paid enough for this crap`
  );
  start();
};

let campsite = () => {
  alert(
    ` as you get close to the campsite you see smoke coming from your camper van which holds your gear. you set off your distress signal. you you attempt retrieval of your gear?`
  );
  let answer = prompt("type yes or no");
  if (answer == "") {
    alert(`try something`);
    campsite();
  } else if (answer == "yes") {
    fire();
  } else if (answer == "no") {
    cave();
  }
};

let fire = () => {
  alert(
    `you arrive at your camper van, it is ablaze. you smash through the window and reach inside, your scorched hand grabs a duffel bag filled with some gear. yousee a black silhouhette in the distance, you then hear a bellowing roar coming from the mysterious figure. do you investigate the figure or find shelter.`
  );
  let answer = prompt("type figure  or shelter");
  if (answer == "") {
    alert(`try something`);
    fire();
  } else if (answer == "figure") {
    end2();
  } else if (answer == "shelter") {
    cabin();
  }
};

let end2 = () => {
  alert(
    `you investigate the figure, as you get close to thhe figure you take your camera from your duffel bag and take pictures as you approach, suddenly the figure starts to get even closer than the pictures. you look up from the camera and you see the figure is ... THE SASQUATCH.. looking you dead in the eyes as it stands 7 feet away. you panic and try to find your gun from your bag. as you are searching the sasquatch charges at you and rips you apart limb by limb`
  );
  start();
};

let cabin = () => {
  alert(
    `you head off to find alternate shelter, and stumble across an abandoned cabin. you try the door, luckily it is unlocked so you enter the cabin and get some rest. in the morning, you decide to check out the area. when you stumble upon a figure you suspect to be the sasquatch. you see some tracks and decide to follow `
  );
  forest();
};

let cave = () => {
  alert(
    `you head off to find alternate shelter, you stumble across a cave. you find the remains of an unfortunate traveller. you see a flashligh, hunting, knfe and rifle. you take them with you and try to get some rest.`
  );

  alert(
    `in the morning you start the investigation. do you re-enter the forest or go the river that is nearby on your map`
  );
  let answer = prompt("type river or forest");
  if (answer == "") {
    alert(`try something`);
    cave();
  } else if (answer == "river") {
    river();
  } else if (answer == "forest") {
    forest();
  }
};

let forest = () => {
  alert(
    `you encounter the sasquatch, but it sees you and makes a run for it. you give chase but lose sight at the fork of the pathway. whitch way do you choose`
  );
  let answer = prompt("type left or right");
  if (answer == "") {
    alert(`try something`);
    forest();
  } else if (answer == "left") {
    end3();
  } else if (answer == "right") {
    river();
  }
};

let end3 = () => {
  alert(
    `you run left to a clearing and cant see the sasquatch anywhere, suddenly you feel the ground thud behind you, an eery slow growl startles you but you are too scared to look. it gets louder, you feel two big hads grab your head,you close your eyes as you except your fate. you go to open them but you cant, the sasquatch has taken your head. you have died`
  );
  start();
};

let river = () => {
  alert(
    `you get to the river, the sasquatch is drinking water. it must be tired from the chase. you find a hiding spot at the bank of the river. you decide to attack the sasquatch while it is off guard. do you use your knife or rifle ?`
  );
  let answer = prompt("type knife or rifle");
  if (answer == "") {
    alert(`try something`);
    river();
  } else if (answer == "knife") {
    knife();
  } else if (answer == "rifle") {
    rifle();
  }
};

let knife = () => {
  alert(`You flank the Sasquatch and get close. As you approach to thrust your knife into the creature, it turns around and hits you with a powerful blow. You fall to the floor, the Sasquatch is approaching to finish you off. Do you reach for your rifle for one last attempt to kill it. attempt to grab your knife or try to escape? 
    `);
  let answer = prompt("type knife or rifle or escape");
  if (answer == "") {
    alert(`try something`);
    knife();
  } else if (answer == "knife") {
    alert(`You muster all your strength for one final act of bravery, you reach for
            the knife that is beside you and attempt to thrust it into the Sasquatch's
            chest. Luckily, because you are a badass commando, you have enough
            strength to successfully plunge the knife through its chest and kill the
            elusive Sasquatch. Severely injured, you crawl to shelter and hope your
            distress signal was spotted. Several hours have passed, you wake up in
            a hospital bed. The distress signal had worked and someone is walking
            towards your bed, it is the President; she thanks you for your bravery and awards you with a medal of honor.`);
  } else if (answer == "rifle") {
    alert(` with no signs of help around. you slowly reach for your rifle As the Sasquatch is about to strike, you hear a noise in the distance, the distress
      signal you used earlier had been spotted. A military transport chopper arrives with back-up, the Sasquatch turns towards the soldiers as they land. You
      crawl back from the creature and wave to the soldiers to notify them of your position. They take down the Sasquatch and take you for medical help. You were well paid for your job. Good hunting soldier.`);
  } else if (answer == "escape")
    alert(`you use your last energy to attempt an escape, but the sasquatch is too fast and blocks your path, the Sasquatch is about to strike. Although you are injured, you muster the
    strength to attempt one final act of bravery. You try to grab your knife and thrust towards the creature's chest, unfortunately due to your injuries your
    attempt fails and the Sasquatch stamps on your chest and then flings you into a nearby tree, you are impaled by a branch and left as a warning symbol to anyone else who dares enter the territory of the Sasquatch's domain!
    `);
};

let rifle = () => {
  alert(
    `you pull out your rifle and mount it on the edge. you see a hiding spot with a better vantage point do you take the shot, move to the new hiding spot or decide to put your gun away ? `
  );
  let answer = prompt("type shoot or move or put gun away ");
  if (answer == "") {
    alert(`try something`);
    rifle();
  } else if (answer == "shoot") {
    alert(`As you prepare to take the shot, you double-check any variables such as wind-speed and distance. You centre your scope, you inhale, squeeze the trigger, exhale and then fire. Perfect shot!! The Sasquatch is killed as you get a critical hit through it's skull. You pluck a tooth out of the
    Sasquatch as proof and personal trophy, you then make your way to the evacuation point and contact your transport to come get you. You
    are taken straight to the White House and the President herself congratulates you for your efforts.`);
  } else if (answer == "move") {
    alert(`you move to get a better vantage point and you settle once again. you take aim and pull the trigger. Your gun jammed and you were unable to take the shot. The Sasquatch is
    alerted to your presence and immediately charges full force at you. The Sasquatch, with one fearsome blow, tears your body asunder. It then throws
    you into a tree and impales you. You are left there as a warning to anyone else foolish enough to enter the Sasquatch's territory.`);
  } else if (answer == "put gun away") {
    alert(
      `You try to put the gun away as you decide not to shoot. The Sasquatch hears rustling and looks straight at you, in a panic you try to shoot it and you hit one of the legs. Confused, you stand there and try to think of what to do. All of a sudden you hear a transport chopper approaching, your distress signal had worked and back-up has come, you join up on the ground as they land and you all fire at the Sasquatch, finishing the creature off and ending this mission. You are taken straight to the White House and the President herself congratulates you for your effort`
    );
  }
};
