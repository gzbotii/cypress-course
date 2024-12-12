import unittest

class User:
    def __init__(self, username, password, role, is_active):
        self.username = username
        self.password = password
        self.role = role
        self.is_active = is_active

def check_admin_permission(user, input_password):
    if not user.is_active:
        return "Access Denied: Inactive account."
    if user.password != input_password:
        return "Access Denied: Incorrect password."
    if user.role != "admin":
        return "Access Denied: Insufficient permissions."
    return "Access Granted: Welcome, Admin!"

class TestCheckAdminPermission(unittest.TestCase):
    def test_valid_admin_login(self):
        user = User("johndoe", "admin123", "admin", True)
        result = check_admin_permission(user, "admin123")
        self.assertEqual(result, "Access Granted: Welcome, Admin!")

    def test_inactive_account(self):
        user = User("inactiveuser", "password", "admin", False)
        result = check_admin_permission(user, "password")
        self.assertEqual(result, "Access Denied: Inactive account.")

    def test_incorrect_role(self):
        user = User("janedoe", "password", "user", True)
        result = check_admin_permission(user, "password")
        self.assertEqual(result, "Access Denied: Insufficient permissions.")

    def test_incorrect_password(self):
        user = User("johndoe", "admin123", "admin", True)
        result = check_admin_permission(user, "wrongpassword")
        self.assertEqual(result, "Access Denied: Incorrect password.")

if __name__ == "__main__":
    unittest.main()