
import strings from './localization';

export default {
	id: 'checkpoints',
	title: strings.checkpoints,
	name: strings.checkpoint,
	prefix: 'chpo',
	apiId: 'chpo_id',
	info: {
		properties: [
		{
			key: 'chpo_headline',
			label: strings.title,
			valueKeys: ['chpo_headline'],
			type: 'text'
		},
		{
			key: 'chpo_priority',
			label: strings.priority,
			valueKeys: ['chpo_priority'],
			type: 'text'
		},
		],
		defaultList: ['chpo_headline', 'chpo_priority']
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
				key: 'chpo_headline',
				label: strings.title,
				valueKeys: ['chpo_headline'],
				type: 'text'
			},
			{
				key: 'chpo_description',
				label: strings.description,
				valueKeys: ['chpo_description'],
				type: 'text'
			},
			{
				key: 'chpo_long_description',
				label: strings.detailedDescription,
				valueKeys: ['chpo_long_description'],
				type: 'text'
			},
			{
				key: 'chpo_emergency_description',
				label: strings.emergencyDescription,
				valueKeys: ['chpo_emergency_description'],
				type: 'text',
				optional: true
			},
			{
				key: 'chpo_priority',
				label: strings.priority,
				valueKeys: ['chpo_priority'],
				values: [
				{
					value: 0,
					label: strings.normal 
				},
				{
					value: 1,
					label: strings.important 
				},
				{
					value: 2,
					label: strings.riskOfInjury 
				}
				],
				placeholder: strings.ChoosePriority,
				type: 'selectable'
			},
			{
				key: 'chpo_default',
				label: '',
				valueKeys: ['chpo_default'],
				type: 'bool',
				description: strings.defaultCheckPoint,
				optional: false
			}
			]
		},
		]
	}
}