exports.generateTeamMemberHtml = (member) => {
    let htmlString = `<div class="col">
            <div class="card rounded">
                <div class="card-header">
                    <h1 >${member.getName()}</h1>
                    <h3><i class="fas ${getIconByRole(member)} icon"></i>${member.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${member.getId()}</li>
                        <li class="list-group-item"> Employee Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                        ${(member.getRole() == 'Manager') ? "<li class='list-group-item'>" + "Office Number: " + member.getOfficeNumber() + "</li>" : ""}
                        ${(member.getRole() == 'Engineer') ? "<li class='list-group-item'>" + "GitHub: " + "<a href=\'https://github.com/" + member.getGithub() + "\' target=\'_blank\'>" + member.getGithub() + "</a></li>" : ""}
                        ${(member.getRole() == 'Intern') ? "<li class='list-group-item'>" + "School Name: " + member.getSchool() + "</li>" : ""}   
                    </ul>
                </div>
            </div>
        </div>
    `

    return htmlString
}

function getIconByRole(member) {
    let icon = "";
    if(member.getRole() == 'Manager') {
        icon = "fa-mug-hot"
    } else if(member.getRole() == 'Engineer') {
        icon = "fa-glasses"
    } else
        icon = "fa-user-graduate"

    return icon;
};