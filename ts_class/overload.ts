class User2 {
    skills!: string[];

    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills == 'string'){
            this.skills.push(skillOrSkills)
        } else {
            this.skills.concat(skillOrSkills);
        }
    }
}

/*
function runs (distance: string): void;
function runs (distance: number): void;
function runs (distance: number | string): void;
*/
function runs(distance: string): void; // Overload 1
function runs(distance: number): void; // Overload 2
function runs(distance: number | string): void { // Implementation
  if (typeof distance === 'number') {
    console.log(`Running ${distance} meters.`);
  } else if (typeof distance === 'string') {
    console.log(`Running ${distance}.`);
  }
}