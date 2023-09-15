from rest_framework import serializers
from paritechapp.models import Products

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

class IndividualProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

class CategoryProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'