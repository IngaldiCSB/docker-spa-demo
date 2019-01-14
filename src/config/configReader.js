//WIP
module.exports = class
{
    constructor(config)
    {
        this._config = config
    }
    get(key , defaultValue)
    {
        
        return this._config[key] || defaultValue
    }
}