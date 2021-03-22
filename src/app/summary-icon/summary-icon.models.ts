/*
This class stores information on the summary icons and their labels

These are used both in the header, and the summary section

The icons are defined in the EBI Font Library, v1.2
*/

export class SummaryIcons {
  label: string; // Label of the icon, e.g. "Ligands"
  icon_class: string; // EBI font Icon class, e.g. 'icon-generic'
  icon_data_icon: string; // EBI font data icon, e.g. 'H'
  section_div_id: string; // Section div id where the icon links to, e.g. 'ligands'
  counts: any; // Count of data items associated with the icon, e.g. 42
  description: string; // Description tooltip
}
