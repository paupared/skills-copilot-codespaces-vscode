function skillsMember() {
    var member = {
        name: "Member",
        description: "A member of the team with specific skills.",
        skills: []
    };

    member.addSkill = function(skill) {
        if (!member.skills.includes(skill)) {
            member.skills.push(skill);
            console.log(`Skill ${skill} added.`);
        } else {
            console.log(`Skill ${skill} already exists.`);
        }
    };

    member.removeSkill = function(skill) {
        const index = member.skills.indexOf(skill);
        if (index > -1) {
            member.skills.splice(index, 1);
            console.log(`Skill ${skill} removed.`);
        } else {
            console.log(`Skill ${skill} not found.`);
        }
    };

    return member;
}