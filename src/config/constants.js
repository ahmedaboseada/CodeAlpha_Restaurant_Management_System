const ROLES = {
    ADMIN: 'admin',
    MANAGER: 'manager',
    CHEF: 'chef',
    WAITER: 'waiter',
    CUSTOMER: 'customer'
};

const ORDER_STATUS = {
    DRAFT: 'draft',
    CONFIRMED: 'confirmed',
    IN_PROGRESS: 'in_progress',
    SERVED: 'served',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled'
};

const TABLE_STATUS = {
    AVAILABLE: 'available',
    RESERVED: 'reserved',
    OCCUPIED: 'occupied'
};

const INVENTORY_STATUS = {
    IN_STOCK: 'in_stock',
    LOW_STOCK: 'low_stock',
    OUT_OF_STOCK: 'out_of_stock'
};

module.exports = {
    ROLES,
    ORDER_STATUS,
    TABLE_STATUS,
    INVENTORY_STATUS
};
