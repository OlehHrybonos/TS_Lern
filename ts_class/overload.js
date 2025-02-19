"use strict";
class User2 {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    }
}
function runs(distance) {
    if (typeof distance === 'number') {
        console.log(`Running ${distance} meters.`);
    }
    else if (typeof distance === 'string') {
        console.log(`Running ${distance}.`);
    }
}
