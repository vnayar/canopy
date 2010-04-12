JSCLASS_PATH = 'vendor/js.class/build/min'
load(JSCLASS_PATH + '/loader.js')

JS.Packages(function() { with(this) {
    file('source/stake.js').provides('Stake')
    autoload(/^(.*)Spec$/, {from: 'spec', require: '$1'})
}})

require('JS.Test', function() {
    require('StakeSpec',
            
    JS.Test.method('autorun'))
})

