'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // this.argument('component', { type: String, required: true });

    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the perfect ${chalk.red('generator-codeblitzing')} generator!`
      )
    );

    const prompts = [
      {
        name: 'name',
        message: 'Your project name',
        default: 'leet-1337'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  default() {
    mkdirp(this.props.name);
    this.destinationRoot(this.destinationPath(this.props.name));
  }

  _generateFiles(path, props) {
    this.fs.copyTpl(
      this.templatePath(path),
      this.destinationPath(),
      props,
    );
  }

  writing() {
    this._generateFiles('**/*', this.props);
  }

  install() {
    // this.installDependencies({bower: false, yarn: false, npm:true});
  }

  _otherStuffYouCouldDo() {
    // this.packageJson.merge({
    //   scripts: {
    //     start: 'webpack --serve',
    //   },
    //   dependencies: {
    //     ...
    //   },
    //   peerDependencies: {
    //     ...
    //   },
    // });

    this.addDependencies('lodash');
    this.addDevDependencies('ava');
    this.config.Xname = this.determineAppname();
    this.git.email();
    this.git.name();
    this.git.username();
    this.spawnCommandSync('ls', ['-al']);
  }
};
