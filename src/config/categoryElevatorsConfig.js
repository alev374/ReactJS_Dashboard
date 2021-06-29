import strings from "./localization";

export default {
	id: 'elevators',
	title: strings.elevators,
	name: strings.elevator,
	prefix: 'elev',
	apiId: 'elev_id',
	info: {
		properties: [
		{
			key: 'elev_serial_number',
			label: strings.serialNumber,
			valueKeys: ['elev_serial_number'],
			type: 'text'
		},
		{
			key: 'elev_inspection_days',
			label: strings.inspectionDays,
			valueKeys: ['elev_inspection_days'],
			type: 'date'
		},
		{
			key: 'elev_street',
			label: strings.street,
			valueKeys: ['elev_estate.esta_address.address_street_name','elev_estate.esta_address.address_street_number'],
			type: 'text'
		},
		{
			key: 'elev_city',
			label: strings.city,
			valueKeys: ['elev_estate.esta_address.address_zipcode','elev_estate.esta_address.address_city'],
			type: 'text'
		},
		{
			key: 'elev_manufacturer',
			label: strings.manufacturer,
			valueKeys: ['elev_manufacturer'],
			type: 'text'
		},
		{
			key: 'elev_build_year',
			label: strings.constructionYear,
			valueKeys: ['elev_build_year'],
			type: 'text'
		},
		{
			key: 'elev_location',
			label: strings.location,
			valueKeys: ['elev_location'],
			type: 'text'
		},
		{
			key: 'elev_type',
			label: strings.type,
			valueKeys: ['elev_type'],
			type: 'text'
		},
		],
		defaultList: ['elev_serial_number','elev_inspection_days','elev_street','elev_city','elev_manufacturer','elev_build_year','elev_location','elev_typ']
	},
	datasheet: {
		schema: [
		{
			section: {
				key: 'general',
				label: strings.general,
			},
			properties:[
			{
				key: 'elev_serial_number',
				label: strings.serialNumber,
				valueKeys: ['elev_serial_number'],
				type: 'text'
			},
			{
				key: 'elev_barcode',
				label: strings.barcode,
				valueKeys: ['elev_barcode'],
				type: 'unique',
				isEditable: false
			},
			{
				key: 'elev_manufacturer',
				label: strings.manufacturer,
				valueKeys: ['elev_manufacturer'],
				searchKeys: ['elev_manufacturer'],
				type: 'search',
				category: 'elevators'
			},
			{
				key: 'elev_build_year',
				label: strings.constructionYear,
				valueKeys: ['elev_build_year'],
				searchKeys: ['elev_build_year'],
				type: 'search',
				category: 'elevators'
			},
			{
				key: 'elev_location',
				label: strings.location,
				valueKeys: ['elev_location'],
				searchKeys: ['elev_location'],
				type: 'search',
				category: 'elevators'
			},
			{
				key: 'elev_type',
				label: strings.type,
				valueKeys: ['elev_type'],
				searchKeys: ['elev_type'],
				type: 'search',
				category: 'elevators'
			},
			{
				key: 'elev_is_active',
				label: strings.elevatorStatus,
				valueKeys: ['elev_is_active'],
				type: 'bool',
				description: strings.elevatorInOperation,
				defaultValue: true,
			},
			]
		},
		{
			section: {
				key: 'elev_estate',
				label: strings.estate,
			},
			properties:[
			{
				key: 'esta_id',
				apiId: 'esta_id',
				apiCategory: 'estates',
				label: strings.estate,
				valueKeys: ['elev_estate.esta_address.address_street_name','elev_estate.esta_address.address_zipcode','elev_estate.esta_address.address_city'],
				searchKeys: ['esta_address.address_street_name','esta_address.address_zipcode','esta_address.address_city'],
				type: 'reference',
				category: 'estates',
				optionValues: ['esta_address.address_street_name','esta_address.address_street_number','esta_address.address_zipcode','esta_address.address_city'],
				optionLableValues: []
			},
			]
		},
		{
			section: {
				key: 'elev_inspector',
				label: strings.elevatorTest,
			},
			properties:[
			{
				key: 'pers_inspector_id',
				apiId: 'pers_id',
				apiCategory: 'users',
				label: strings.elevatorAttendant,
				valueKeys: ['elev_inspector.pers_firstname', 'elev_inspector.pers_lastname'],
				searchKeys: ['pers_firstname', 'pers_lastname'],
				type: 'reference',
				category: 'users',
				optionValues: ['pers_firstname', 'pers_lastname'],
				optionLableValues: ['pers_username', 'pers_scope']
			},
			{
				key: 'pers_substitute_id',
				apiId: 'pers_id',
				apiCategory: 'users',
				label: strings.elevatorRepresentation,
				valueKeys: ['elev_substitute.pers_firstname', 'elev_substitute.pers_lastname'],
				searchKeys: ['pers_firstname', 'pers_lastname'],
				type: 'reference',
				category: 'users',
				optionValues: ['pers_firstname', 'pers_lastname'],
				optionLableValues: ['pers_username', 'pers_scope'],
				optional: true
			},
			{
				key: 'elev_inspection_days',
				label: strings.inspectionDays,
				valueKeys: ['elev_inspection_days'],
				values: [
				{
					value: '1',
					label: '1'
				},
				{
					value: '2',
					label: '2'
				},
				{
					value: '3',
					label: '3'
				},
				{
					value: '4',
					label: '4'
				},
				{
					value: '5',
					label: '5'
				},
				{
					value: '6',
					label: '6'
				},
				{
					value: '7',
					label: '7'
				},
				{
					value: '8',
					label: '8'
				},
				{
					value: '9',
					label: '9'
				},
				{
					value: '10',
					label: '10'
				},
				{
					value: '11',
					label: '11'
				},
				{
					value: '12',
					label: '12'
				},
				{
					value: '13',
					label: '13'
				},
				{
					value: '14',
					label: '14'
				},
				{
					value: '15',
					label: '15'
				},
				{
					value: '16',
					label: '16'
				},
				{
					value: '17',
					label: '17'
				},
				{
					value: '18',
					label: '18'
				},
				{
					value: '19',
					label: '19'
				},
				{
					value: '20',
					label: '20'
				},
				{
					value: '21',
					label: '21'
				},
				{
					value: '22',
					label: '22'
				},
				{
					value: '23',
					label: '23'
				},
				{
					value: '24',
					label: '24'
				},
				{
					value: '25',
					label: '25'
				},
				{
					value: '26',
					label: '26'
				},
				{
					value: '27',
					label: '27'
				},
				{
					value: '28',
					label: '28'
				},
				{
					value: 'Mo',
					label: 'Mo'
				},
				{
					value: 'Di',
					label: 'Di'
				},
				{
					value: 'Mi',
					label: 'Mi'
				},
				{
					value: 'Do',
					label: 'Do'
				},
				{
					value: 'Fr',
					label: 'Fr'
				},
				],
				type: 'days'
			},
			]
		},			
		{
			section: {
				key: 'elev_checklist',
				label: strings.checklistAndCheckpoints,
			},
			properties:[
			// {
			// 	key: 'chli_id',
			// 	apiId: 'chli_id',
			// 	apiCategory: 'checklists',
			// 	datasheetCategory: 'elevators',
			// 	datasheetLink: 'elev_checkpoints',
			// 	label: strings.checklist,
			// 	valueKeys: ['elev_checklist.chli_name'],
			// 	searchKeys: ['elev_checklist.chli_name'],
			// 	type: 'reference',
			// 	category: 'checklists',
			// 	optionValues: ['chli_name'],
			// 	optionLableValues: []
			// },
			// {
			// 	key: 'elev_checkpoints',
			// 	label: strings.checklists,
			// 	apiCategory: 'checkpoints',
			// 	newElementDialogLabel: strings.addCheckpoint,
			// 	additionalList: {
			// 		path: 'elev_checklist.chli_checkpoints',
			// 		value: 'chpo_id',
			// 		datasheetReference: 'chli_checkpoints'
			// 	},
			// 	valueKeys: [
			// 	{
			// 		key: 'chpo_id',
			// 		apiId: 'chpo_id',
			// 		apiCategory: 'checkpoints',					
			// 		label: strings.checkpoint,
			// 		valueKeys: ['chpo_headline'],
			// 		searchKeys: ['chpo_headline'],
			// 		type: 'reference',
			// 		category: 'checkpoints',
			// 		optionValues: ['chpo_headline'],
			// 		optionLableValues: []
			// 	},
			// 	],
			// 	type: 'list',
			// 	optional: true
			// }
			{
				type: 'point',
				key: 'elev_chpoints',
				label: strings.checklists,
				apiCategory: 'checkpoints',
				valueKeys:{
										key: 'chpo_id',
										apiId: 'chpo_id',
										apiCategory: 'checkpoints',					
										label: strings.checkpoint,
										valueKeys: ['chpo_headline'],
										type: 'reference',
										category: 'checkpoints'
									},
			}
			]
		},
		{
			section: {
				key: 'emergency_information',
				label: strings.emergency,
			},
			properties:[
			{
				key: 'emergency_company',
				label: strings.emergencyService,
				valueKeys: ['elev_emergency_information.emergency_company'],
				searchKeys: ['elev_emergency_information.emergency_company'],
				type: 'search',
				category: 'elevators'
			},
			{
				key: 'emergency_company_phone_number',
				label: strings.emergencyNumber,
				valueKeys: ['elev_emergency_information.emergency_company_phone_number'],
				searchKeys: ['elev_emergency_information.emergency_company_phone_number'],
				type: 'search',
				category: 'elevators'
			},
			{
				key: 'emergency_exit_instructions',
				label: strings.additionalInformation,
				valueKeys: ['elev_emergency_information.emergency_exit_instructions'],
				searchKeys: ['elev_emergency_information.emergency_exit_instructions'],
				type: 'search',
				category: 'elevators',
				optional: true,
			},
			{
				key: 'emergency_phone_number',
				label: strings.emergencyNumber,
				valueKeys: ['elev_emergency_information.emergency_phone_number'],
				searchKeys: ['elev_emergency_information.emergency_phone_number'],
				type: 'search',
				category: 'elevators'
			},
			]
		},
		{
			section: {
				key: 'reports',
				label: strings.reports,
			},
			properties:[
			{
				key: 'elev_reports',
				label: strings.date,
				valueKeys: [
				{
					key: 'repo_creation',
					apiId: 'repo_creation',
					label: strings.date,
					valueKeys: ['repo_creation'],
					searchKeys: ['repo_creation'],
					type: 'timestamp',
					category: 'reports'
				},
				],
				searchKeys: ['elev_reports'],
				type: 'report',
				category: 'reports',
				optional: true,
			}
			]
		},
		]
	}
}