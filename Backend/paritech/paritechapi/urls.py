from django.urls import path
from .views import (
    Products_List,
    IndividualProductView,
    CategoryProductListView,
    DeleteProductView,
    RegisterView,
    LoginView,
    UserView,
    LogoutView,
)

urlpatterns = [
    path("", Products_List.as_view(), name="products"),
    path("<int:pk>/", IndividualProductView.as_view(), name="single_product"),
    path(
        "category/<str:category_name>/",
        CategoryProductListView.as_view(),
        name="category-products",
    ),
    path("<int:pk>/delete", DeleteProductView.as_view(), name="delete_product"),
    path("register", RegisterView.as_view()),
    path("login", LoginView.as_view()),
    path("user", UserView.as_view()),
    path("logout", LogoutView.as_view()),
]
