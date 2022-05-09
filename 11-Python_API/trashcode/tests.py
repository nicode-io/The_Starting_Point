from django.test import TestCase

from app.calc import add, subtract


class CalcTest(TestCase):

    def test_add_numbers(self):
        """Test two numbers sum"""
        self.assertEqual(add(3, 8), 11)

    def test_subtract_number(self):
        """Test two numbers subtract"""
        self.assertEqual(subtract(8, 4), 4)
