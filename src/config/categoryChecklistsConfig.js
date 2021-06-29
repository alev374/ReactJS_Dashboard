import strings from './localization';

export default {
	id: 'checklists',
	title: strings.checklists,
	name: strings.checklist,
	prefix: 'chli',
	apiId: 'chli_id',
	info: {
		properties: [
		{
			key: 'chli_name',
			label: strings.name,
			valueKeys: ['chli_name'],
			type: 'text'
		},
		],
		defaultList: ['chli_name']
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
				key: 'chli_name',
				label: strings.name,
				valueKeys: ['chli_name'],
				type: 'unique'
			}
			]
		},
		{
			section: {
				key: 'checkpoints',
				label: strings.checkpoints,
			},
			properties:[
			{
				key: 'chli_checkpoints',
				label: strings.checkpoints,
				newElementDialogLabel: strings.addCheckpoint,
				valueKeys: [
				{
					key: 'chpo_id',
					apiId: 'chpo_id',
					apiCategory: 'checkpoints',
					label: strings.checkpoint,
					valueKeys: ['chpo_headline'],
					searchKeys: ['chpo_headline'],
					type: 'reference',
					category: 'checkpoints',
					optionValues: ['chpo_headline'],
					optionLableValues: []
				},
				],
				type: 'list'
			}
			]
		},
		]
	}
}