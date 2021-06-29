import strings from "./localization";

export default {
	api:{
		// baseURL: 'https://www.aufzugwaerter.info/api/v1',
		baseURL: 'http://192.168.101.89:3000/api/v1',
		login: '/auth',
		passwordReset: '/reset',
		passwordChange: '/change',
		elevators: '/elevators',
		estates: '/estates',
		users: '/users',
		checklists: '/checklists',
		checkpoints: '/checkpoints',
		reports: '/reports',
		version: 'api/v1/',
	},
	roles:{
		admin: {
			categories: [
				'elevators','estates','users','checkpoints','reports'
			]
		},
		manager: {
			categories: [
				'elevators','estates','users','checkpoints','reports'
			]
		},
		inspector: {
			categories: [
				'elevators','reports'
			]
		},
		owner: {
			categories: [
				'elevators','estates','reports'
			]
		},
		owner_selfmanaged: {
			categories: [
				'elevators','estates','users', 'reports'
			],
			apiCategories: [
				'checkpoints'
			]
		}
	},
	categories: {
		users: {
			id: 'user',
			title: strings.user,
			name: strings.user,
			prefix: 'pers'
		},
		elevators: {
			id: 'elevators',
			title: strings.elevators,
			name: strings.elevator,
			prefix: 'elev'
		},
		estates: {
			id: 'estates',
			title: strings.estate,
			name: strings.estate,
			prefix: 'esta'
		},
		checklists: {
			id: 'checklists',
			title: strings.checklists,
			name: strings.checklist,
			prefix: 'chli'
		},
		checkpoints: {
			id: 'checkpoints',
			title: strings.checkpoints,
			name: strings.checkpoint,
			prefix: 'chpo'
		},
		reports: {
			id: 'reports',
			title: strings.reports,
			name: strings.report,
			prefix: 'repo'
		}
	},
	inputPlaceholders: {
		search: strings.searchForElevator,
		annotation: strings.enterErrorDescription,
		loginUsername: strings.userName,
		loginPassword: strings.password,
	},
	listHeader:{
		searchResult: strings.foundElevators,
		searchRestulEmpty: strings.noElevatorsFound,
		dueElevators: strings.todayDueElevators,
		dueElevatorsEmpty: strings.noElevatorsDueToday,
		allElevators: strings.yourElevators,
		allElevatorsEmpty: strings.notAssignedElevators,
		reportsEmpty: strings.noReportsYet,
		reports: strings.reports,
	},
	alerts:{
		saveAndClose: {
			message: strings.saveAndClose
		},
		discardAndClose: {
			message: strings.discardAndClose
		},
		delete: {
			message: strings.delete
		},
		login:{
			serverTimeout:{
				title: strings.serverTimeoutTitle,
				message: strings.serverTimeoutMessage
			},
			noUsername: {
				title: strings.noUsernameTitle,
				message: strings.noUsernameMessage
			},
			noPassword: {
				title: strings.noPasswordTitle,
				message: strings.noPasswordMessage
			},
			allEmpty: {
				title: strings.allEmptyTitle,
				message: strings.allEmptyMessage
			},
			wrongUsername:{
				title: strings.wrongUsernameTitle,
				message: strings.wrongUsernameMessage
			},
			wrongPassword:{
				title: strings.wrongPasswordTitle,
				message: strings.wrongPasswordMessage
			},
			notfound:{
				title: strings.notFoundTitle,
				message: strings.notFoundMessage
			},
			logoutWarning:{
				title: strings.logoutWarningTitle,
				message: strings.logoutWarningMessage
			}
		}
	},
	buttonLables:{

	},
	specialTerms:{
		admin: 'Admin',
		manager: 'Manager',
		inspector: 'Aufzugwärter',
		owner: 'Eigentümer/Verwalter',
		ownerselfmanager: 'Owner Selfmanager',
		home: 'privat',
		work: 'geschäftlich',
		mobile: 'mobil'
	}
}