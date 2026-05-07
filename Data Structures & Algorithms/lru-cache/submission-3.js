class LRUCache {
    capacity = 0;
    cache = new Map();
    recentlyUsed = []
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const keyIndex = this.recentlyUsed.indexOf(key);
        console.log('_________________________________')
        console.log(`GET: Chave ${key}`)
        if (keyIndex >= 0 && this.recentlyUsed.length > 1 && keyIndex !== this.recentlyUsed.length - 1) {   
            console.log(`GET: Chave ${key}. Atualizando ordem do array`)
            this.recentlyUsed.push(this.recentlyUsed.splice(keyIndex, 1)[0])
        }

        console.log(this.cache)
        console.log(this.recentlyUsed)
        console.log('_________________________________')
        return this.cache.get(key) ?? -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
  
        if (this.cache.has(key)) {
            // Atualizar a fila dos usados recentemente
            const keyIndex = this.recentlyUsed.indexOf(key);
            if (keyIndex >= 0 && this.recentlyUsed.length > 1 && keyIndex !== this.recentlyUsed.length - 1) {
                this.recentlyUsed.push(this.recentlyUsed.splice(keyIndex, 1)[0])
            }
        } else {
            // Se capacidade for maior, remove o primeiro da fila. Adiciona novo item.
            if(this.recentlyUsed.length == this.capacity) {
                const removedKey = this.recentlyUsed.shift();
                this.cache.delete(removedKey);
            }
            this.recentlyUsed.push(key);
        }
        this.cache.set(key, value);
        console.log('_________________________________')
        console.log(`PUT: Chave ${key}, Valor ${value}`)
        console.log(this.cache)
        console.log(this.recentlyUsed)
        console.log('_________________________________')
    }
}
