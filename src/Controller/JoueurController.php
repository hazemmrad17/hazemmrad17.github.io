<?php

namespace App\Controller;

use App\Entity\Joueur;
use App\Form\JoueurType;
use App\Repository\JoueurRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/joueur')]
class JoueurController extends AbstractController
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/main', name: 'joueur_main', methods: ['GET'])]
    public function index(JoueurRepository $joueurRepository): Response
    {
        $joueurs = $joueurRepository->findAll();
        return $this->render('joueur/main.html.twig', [
            'joueurs' => $joueurs,
        ]);
    }

    #[Route('/new', name: 'joueur_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $joueur = new Joueur();
        $form = $this->createForm(JoueurType::class, $joueur);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $profilePictureFile = $form->get('profilePicture')->getData();
            if ($profilePictureFile) {
                $newFilename = uniqid().'.'.$profilePictureFile->guessExtension();
                try {
                    $profilePictureFile->move(
                        $this->getParameter('profile_pictures_directory'),
                        $newFilename
                    );
                    $joueur->setProfilePictureUrl('/uploads/profile_pictures/'.$newFilename);
                } catch (FileException $e) {
                    $this->addFlash('error', 'Erreur lors du téléchargement de l\'image');
                    return $this->render('joueur/new.html.twig', [
                        'joueur' => $joueur,
                        'form' => $form->createView(),
                    ]);
                }
            }

            $this->entityManager->persist($joueur);
            $this->entityManager->flush();

            $this->addFlash('success', 'Joueur créé avec succès!');
            return $this->redirectToRoute('joueur_main');
        }

        return $this->render('joueur/new.html.twig', [
            'joueur' => $joueur,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'joueur_show', methods: ['GET'])]
    public function show(Joueur $joueur): Response
    {
        return $this->render('joueur/show.html.twig', [
            'joueur' => $joueur,
        ]);
    }



    #[Route('/{id}/edit', name: 'joueur_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Joueur $joueur): Response
    {
        $form = $this->createForm(JoueurType::class, $joueur);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $profilePictureFile = $form->get('profilePicture')->getData();
            if ($profilePictureFile) {
                $newFilename = uniqid().'.'.$profilePictureFile->guessExtension();
                try {
                    $profilePictureFile->move(
                        $this->getParameter('profile_pictures_directory'),
                        $newFilename
                    );
                    if ($joueur->getProfilePictureUrl()) {
                        $oldFile = $this->getParameter('profile_pictures_directory').'/'.basename($joueur->getProfilePictureUrl());
                        if (file_exists($oldFile)) {
                            unlink($oldFile);
                        }
                    }
                    $joueur->setProfilePictureUrl('/uploads/profile_pictures/'.$newFilename);
                } catch (FileException $e) {
                    $this->addFlash('error', 'Erreur lors du téléchargement de l\'image');
                    return $this->render('joueur/edit.html.twig', [
                        'joueur' => $joueur,
                        'form' => $form->createView(),
                    ]);
                }
            }

            $this->entityManager->flush();

            $this->addFlash('success', 'Joueur mis à jour avec succès!');
            return $this->redirectToRoute('joueur_main');
        }

        return $this->render('joueur/edit.html.twig', [
            'joueur' => $joueur,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'joueur_delete', methods: ['POST'])]
    public function delete(Request $request, Joueur $joueur): Response
    {
        if ($this->isCsrfTokenValid('delete'.$joueur->getIdJoueur(), $request->request->get('_token'))) {
            if ($joueur->getProfilePictureUrl()) {
                $file = $this->getParameter('profile_pictures_directory').'/'.basename($joueur->getProfilePictureUrl());
                if (file_exists($file)) {
                    unlink($file);
                }
            }
            $this->entityManager->remove($joueur);
            $this->entityManager->flush();

            $this->addFlash('success', 'Joueur supprimé avec succès!');
        }

        return $this->redirectToRoute('joueur_main');
    }
}