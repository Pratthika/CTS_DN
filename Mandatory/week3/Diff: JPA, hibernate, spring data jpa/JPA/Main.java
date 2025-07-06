package com.example;

import com.example.model.Employee;

import javax.persistence.*;

public class Main {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("employeePU");

        EntityManager em = emf.createEntityManager();

        EntityTransaction tx = em.getTransaction();
        tx.begin();
        Employee emp = new Employee();
        emp.setName("John Doe");
        emp.setSalary(45000.0);

        em.persist(emp);

        tx.commit();

        em.close();
        emf.close();

        System.out.println("Employee saved successfully.");
    }
}
