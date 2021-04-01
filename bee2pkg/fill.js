const editoritems_template = `
"Item"
	{
	"ItemClass"	"ItemBase"
	"Type"	"{ITEM_ID}"
	"Editor"
		{
		"SubType"
			{
				"Name"				"{ITEM_NAME}"
				"Model" { "ModelName"		"turret.3ds" }
				"Palette"
				{
					"Tooltip"		"{ITEM_NAME}"
					"Image"			"palette/clean/{ITEM_ID}.png"
					"Position"		"4 2 0"
				}
				"Sounds"
				{
				"SOUND_CREATED"			"P2Editor.PlaceOther"
				"SOUND_EDITING_ACTIVATE"	"P2Editor.ExpandOther"
				"SOUND_EDITING_DEACTIVATE"	"P2Editor.CollapseOther"
				"SOUND_DELETED"			"P2Editor.RemoveOther"
				}
				"Animations"
				{
					"ANIM_IDLE"			"0"
					"ANIM_EDITING_ACTIVATE"		"1"
					"ANIM_EDITING_DEACTIVATE"	"2"
				...
				}
			}
		}
		"MovementHandle"	"HANDLE_4_DIRECTIONS"
		"InvalidSurface" 	"WALL FLOOR CEILING"
		"DesiredFacing"		"DESIRES_ANYTHING"
		"CanAnchorOnGoo"	"0"
		"CanAnchorOnBarriers"	"0"
	}
	"Properties" {}
	"Exporting"
	{
		"Instances"
		{
			"0"
			{
				"Name" "instances/BEE2/clean/{ITEM_ID}.vmf"
				"EntityCount"	"4"
				"BrushCount"	"4" 
				"BrushSideCount"	"24"
			}
		}
	"TargetName"	"name"
	"Offset"	"64 64 64"
	}
}
`

const properties_template = `
"Properties" {
	"Authors" ""
	"Description" "{ITEM_DESC}"
	"Icon" "clean/{ITEM_ID}.png"
	{
		"0" "clean/{ITEM_ID}.png"
	}
}
`

const info_item_template = `
"Item"
{
	"ID"  "{ITEM_ID}"
	"Version"
	{
		"Styles"
		{
			"BEE2_CLEAN" "{ITEM_ID}"
		}
	}
}
`
