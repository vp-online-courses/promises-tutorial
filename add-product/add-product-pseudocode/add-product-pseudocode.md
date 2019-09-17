*******************************************
Pseudocode for addProduct function
*******************************************

function addProduct:
    token = getToken()
    userId = getUserIdByToken(token)
    if userHasPermission(userId, 'add_products'):
        addProduct(product)
        addToStock(product, quantity)
