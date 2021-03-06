import 'docs/src/modules/components/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

const req = require.context('markdown', true, /.md$/);

function Page(props) {
  return (
    <MarkdownDocs
      markdown={req(`./progress${props.lang}.md`)}
      demos={{
        'pages/demos/progress/CircularIndeterminate.js': {
          js: require('docs/src/pages/demos/progress/CircularIndeterminate').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/progress/CircularIndeterminate'), 'utf8')
`,
        },
        'pages/demos/progress/CircularIntegration.js': {
          js: require('docs/src/pages/demos/progress/CircularIntegration').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/progress/CircularIntegration'), 'utf8')
`,
        },
        'pages/demos/progress/CircularDeterminate.js': {
          js: require('docs/src/pages/demos/progress/CircularDeterminate').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/progress/CircularDeterminate'), 'utf8')
`,
        },
        'pages/demos/progress/CircularStatic.js': {
          js: require('docs/src/pages/demos/progress/CircularStatic').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/progress/CircularStatic'), 'utf8')
`,
        },
        'pages/demos/progress/LinearIndeterminate.js': {
          js: require('docs/src/pages/demos/progress/LinearIndeterminate').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/progress/LinearIndeterminate'), 'utf8')
`,
        },
        'pages/demos/progress/LinearDeterminate.js': {
          js: require('docs/src/pages/demos/progress/LinearDeterminate').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/progress/LinearDeterminate'), 'utf8')
`,
        },
        'pages/demos/progress/LinearBuffer.js': {
          js: require('docs/src/pages/demos/progress/LinearBuffer').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/progress/LinearBuffer'), 'utf8')
`,
        },
        'pages/demos/progress/LinearQuery.js': {
          js: require('docs/src/pages/demos/progress/LinearQuery').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/progress/LinearQuery'), 'utf8')
`,
        },
        'pages/demos/progress/DelayingAppearance.js': {
          js: require('docs/src/pages/demos/progress/DelayingAppearance').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/progress/DelayingAppearance'), 'utf8')
`,
        },
        'pages/demos/progress/CustomizedProgress.js': {
          js: require('docs/src/pages/demos/progress/CustomizedProgress').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/progress/CustomizedProgress'), 'utf8')
`,
        },
        'pages/demos/progress/CircularUnderLoad.js': {
          js: require('docs/src/pages/demos/progress/CircularUnderLoad').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/progress/CircularUnderLoad'), 'utf8')
`,
        },
      }}
    />
  );
}

export default Page;
