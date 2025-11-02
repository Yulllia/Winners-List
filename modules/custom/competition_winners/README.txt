# Competition Winners Module

## Overview
The Competition Winners module allows content editors to display up to 3 winners on any content type using a Paragraph field. Each winner has a title, subtitle, description, image, and date.

## Features
- Adds a new Paragraph type `Competition Winner Container`.
- Supports up to 3 winners per container.
- Displays winners in a responsive flex layout.
- Automatically truncates title and subtitle with ellipsis.
- Shows tooltip when text is truncated.
- Styled date badges for each winner.

On this project, Drush is installed locally via Composer, so run:
```powershell
vendor\bin\drush cr

## Installation
1. Place this module in `modules/custom/competition_winners`.
2. Enable the module:
   - Via Drupal UI: **Manage → Extend → Competition Winners → Install**
   - Or using Drush: `vendor\bin\drush en competition_winners`
3. Clear caches: `vendor\bin\drush cr` or via **Manage → Configuration → Performance → Clear all caches**.

## Usage
1. Go to **Structure → Paragraphs → Add new type** (if needed) or edit the `Competition Winner Container` Paragraph type.
2. Add the `field_winners_list` field to any content type.
3. Editors can add up to 3 winners per container.

## File Structure
- `competition_winners.info.yml` – module info file.
- `competition_winners.module` – optional module hooks.
- `css/` – compiled CSS for the component.
- `scss/` – SCSS source files for the module styles.
- `js/` – JavaScript for tooltips and interactions.

## Compatibility
- Drupal 10+
- PHP 8+

### Compiling SCSS
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   Run compilation to CSS with: npx gulp styles
