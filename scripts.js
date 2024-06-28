function showSkill(skillId) {
    var details = document.getElementById('skillDetails');
    switch(skillId) {
        case 'skill1':
            details.innerHTML = '<p>技能1的干活好几年你不敢好吧好吧一把浴霸眼巴巴描述。</p>';
            break;
        case 'skill2':
            details.innerHTML = '<p>技能2的详细         有哈哈哈哈哈哈哈哈哈描述。</p>';
            break;
        // 更多技能
    }
}