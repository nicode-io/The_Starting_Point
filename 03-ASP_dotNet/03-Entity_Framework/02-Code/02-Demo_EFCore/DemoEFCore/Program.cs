using DemoEFCore.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DemoEFCore
{
    class Program
    {
        static void Main(string[] args)
        {

            //Insert
            //using(DataContext EF = new DataContext())
            //{
            //    EF.contacts.Add(
            //        new Contact
            //        {
            //            LastName = "Depp",
            //            FirstName = "Johnny",
            //            Email = "j.depp@mail.be"
            //        }
            //    );
            //    try
            //    {
            //        EF.SaveChanges();
            //    }
            //    catch (DbUpdateException dbue)
            //    {
            //        Console.WriteLine(dbue.Message);
            //    }
            //}

            //getAll
            //using (DataContext EF = new DataContext())
            //{
            //    foreach (Contact c in EF.contacts)
            //    {
            //        Console.WriteLine("prénom : {0}", c.FirstName);
            //    }
            //}

            //Update
            //using (DataContext EF = new DataContext())
            //{
            //    Contact contact = EF.contacts.Where(c => c.Id == 3).FirstOrDefault();
            //    contact.Email = "Hell.master666@lux.god";
            //    try
            //    {
            //        EF.SaveChanges();
            //    }
            //    catch (DbUpdateException dbue)
            //    {
            //        Console.WriteLine(dbue.Message);
            //    }
            //}
            //getOne
            //using (DataContext EF = new DataContext())
            //{
            //    Contact contact = EF.contacts.Where(c => c.Id == 3).FirstOrDefault();
            //    Console.WriteLine(contact.FirstName + " " + contact.LastName + " - " +contact.Email);
            //}

            //delete
            //using (DataContext EF = new DataContext())
            //{
            //    Contact contact = EF.contacts.Where(c => c.Id == 1).FirstOrDefault();

            //    try
            //    {
            //        EF.Remove(contact);
            //        EF.SaveChanges();
            //    }
            //    catch (DbUpdateException dbue)
            //    {
            //        Console.WriteLine(dbue.Message);
            //    }
            //}
            
            Console.ReadLine();
        }
    }
}
