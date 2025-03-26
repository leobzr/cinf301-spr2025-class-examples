const predators = {
    'lion': "tickle it's belly",
    'cheetah': 'don\'t even try to run, fight like crazy!',
    'rhino': 'play dead, but maybe it will lick you',
    'leopard': 'growl back, hopefully it will run',
    'hippo': 'make your belly big and hope it thinks you\'re it\'s baby'
}

exports.defend = () => {
    for (key in predators) {
        console.log(`For a ${key}, ${predators[key]}!`);
    }
}

exports.defendone = (choice) => {
    if (predators[choice] !== undefined) {
        return predators[choice];
    }
    else {
        return 'who knows what to do with THAT!';
    }
}

exports.predators = predators;
