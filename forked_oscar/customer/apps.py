import oscar.apps.customer.apps as apps


class CustomerConfig(apps.CustomerConfig):
    name = 'forked_oscar.customer'
