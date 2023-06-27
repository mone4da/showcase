const config = require('./config')
const fs = require('fs')

let personalInformation = (data, template) => {
	return template
			.replace('__NAME__', data.name)
			.replace('__BORN__', data.born)
			.replace('__EMAIL__', data.contacts.email)
			.replace('__PHONE__', data.contacts.phone)
			.replaceAll('__LINKEDIN__', data.contacts.social_media.linkedin)
			.replaceAll('__WORDPRESS__', data.contacts.social_media.wordpress)
			.replaceAll('__GITHUB__', data.contacts.social_media.github)
}

let workExperience = (data, template) => {
	return data.map(e =>
			template
				.replace('__PERIOD__', e.period)
				.replace('__LOCATION__', e.location)
				.replace('__ROLES__', e.roles.join(', '))
				.replace('__DESCRIPTION__', e.description)
				.replace('__TECHNOLOGIES__', e.technologies.join(', '))
			).join()
}

let skills = (data, template) => {
	return data.map(item => 
			template.replace('__NAME__', item)).join('')
}

let projects = (data, template) => {
	return data.map(p => 
			template
				.replace('__NAME__', p.name)
				.replace('__DESCRIPTION__', p.description)
				.replaceAll('__HOST__', p.host)).join('')
}

let education = (data, template) => {
	return data.map(item => 
			template
				.replace('__LEVEL__', item.level)
				.replace('__SUBJECT__',item.subject)
				.replace('__PERIOD__', item.period)
				.replace('__LOCATION__', item.location)
			).join('')
}


let data = JSON.parse(fs.readFileSync(config.source, 'utf8'))
let template = fs.readFileSync(config.template.document, 'utf8')
let workTemplate = fs.readFileSync(config.template.workexperience, 'utf8')
let skillTemplate = fs.readFileSync(config.template.skill, 'utf8')
let projectTemplate = fs.readFileSync(config.template.project, 'utf8')
let educationTemplate = fs.readFileSync(config.template.education, 'utf8')

template = template.replace('__DATASET__', data.dataset)

template = template.replace('__TITLE__', data.title)

template = personalInformation(data.personal_information, template)

template = template.replace('__SUMMARY__', data.summary)

template = template.replace('__SKILLS__', skills(data.skills, skillTemplate))

template = template.replace('__PROJECTS__', projects(data.personal_projects, projectTemplate))

template = template.replace('__EDUCATION__', education(data.education, educationTemplate))

template = template.replace('__WORK_EXPERIENCE__', workExperience(data.work_experience, workTemplate) )

template = template.replace('__PREFERENCES__', data.preferences.join(', '))

console.log( template )
