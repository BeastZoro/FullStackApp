from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, ListAPIView, DestroyAPIView
from paritechapp.models import Products
from .serializers import ProductSerializer, IndividualProductSerializer, CategoryProductSerializer

# Create your views here.

class Products_List(ListCreateAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer

class IndividualProductView(RetrieveAPIView):
    queryset = Products.objects.all()
    serializer_class = IndividualProductSerializer

class CategoryProductListView(ListAPIView):
    serializer_class = CategoryProductSerializer

    def get_queryset(self):
        # Retrieve the category name from the URL parameter
        category_name = self.kwargs.get('category_name')
        # Filter products by category name
        return Products.objects.filter(categories__icontains=category_name)

class DeleteProductView(DestroyAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer