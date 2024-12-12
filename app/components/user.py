class User:
    def __init__(self, username, password, role, is_active):
        self.username = username
        self.password = password
        self.role = role
        self.is_active = is_active

def check_admin_permission(user, input_password):
    # Verify account status
    if not user.is_active:
        return "Access Denied: Inactive account."
    
    # Validate credentials
    if user.password != input_password:
        return "Access Denied: Incorrect password."
    
    # Check user role
    if user.role != "admin":
        return "Access Denied: Insufficient permissions."
    
    # All checks passed
    return "Access Granted: Welcome, Admin!"

# Example users
user1 = User("johndoe", "admin123", "admin", True)
user2 = User("janedoe", "password", "user", True)
user3 = User("inactiveuser", "password", "admin", False)

# Test cases
print(check_admin_permission(user1, "admin123"))  # Should grant access
print(check_admin_permission(user2, "password"))  # Should deny for insufficient permissions
print(check_admin_permission(user3, "password"))  # Should deny for inactive account