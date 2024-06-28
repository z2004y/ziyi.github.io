function showSkill(skillId) {
    var details = document.getElementById('skillDetails');
    switch(skillId) {
        case 'skill1':
            details.innerHTML = '<p>技能1的详细描述。</p>';
            break;
        case 'skill2':
            details.innerHTML = '<p>技能2的详细描述。</p>';
            break;
        // 更多技能
    }
}