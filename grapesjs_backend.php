<?php
// Directory paths
define('PROJECTS_DIR', __DIR__ . '/projects/');
define('ASSETS_DIR', __DIR__ . '/assets/');

// Ensure directories exist
if (!is_dir(PROJECTS_DIR)) mkdir(PROJECTS_DIR, 0777, true);
if (!is_dir(ASSETS_DIR)) mkdir(ASSETS_DIR, 0777, true);

// Get the request method
$method = $_SERVER['REQUEST_METHOD'];
$path = $_GET['path'] ?? '';

header('Content-Type: application/json');

try {
    switch ($path) {
        case 'onSave':
            if ($method === 'POST') {
                $project = json_decode($_POST['project'], true);
                if (!$project) {
                    throw new Exception('Invalid project data');
                }
                $projectId = $project['id'] ?? 'default_project';
                $projectFile = PROJECTS_DIR . $projectId . '.json';
                file_put_contents($projectFile, json_encode($project));
                echo json_encode(['status' => 'success', 'message' => 'Project saved']);
            }
            break;

        case 'onLoad':
            if ($method === 'GET') {
                $projectId = $_GET['id'] ?? 'default_project';
                $projectFile = PROJECTS_DIR . $projectId . '.json';
                if (!file_exists($projectFile)) {
                    throw new Exception('Project not found');
                }
                $project = file_get_contents($projectFile);
                echo json_encode(['project' => json_decode($project, true)]);
            }
            break;

        case 'onUpload':
            if ($method === 'POST') {
                if (!isset($_FILES['files'])) {
                    throw new Exception('No files uploaded');
                }

                $uploadedFiles = $_FILES['files'];

                // Kiểm tra nếu là một file đơn hay nhiều file
                if (is_array($uploadedFiles['name'])) {
                    $fileCount = count($uploadedFiles['name']);
                } else {
                    $fileCount = 1;
                }

                $result = [];
                for ($i = 0; $i < $fileCount; $i++) {
                    $filename = is_array($uploadedFiles['name'])
                        ? basename($uploadedFiles['name'][$i])
                        : basename($uploadedFiles['name']);

                    $tmpName = is_array($uploadedFiles['tmp_name'])
                        ? $uploadedFiles['tmp_name'][$i]
                        : $uploadedFiles['tmp_name'];

                    $targetFile = ASSETS_DIR . $filename;

                    if (move_uploaded_file($tmpName, $targetFile)) {
                        $result[] = ['src' => '/assets/' . $filename];
                    } else {
                        throw new Exception('Failed to upload file: ' . $filename);
                    }
                }
                echo json_encode($result);
            }
            break;

        case 'onDelete':
            if ($method === 'DELETE') {
                $input = json_decode(file_get_contents('php://input'), true);
                if (!isset($input['assets'])) {
                    throw new Exception('No assets to delete');
                }
                foreach ($input['assets'] as $asset) {
                    $filePath = ASSETS_DIR . basename($asset['src']);
                    if (file_exists($filePath)) {
                        unlink($filePath);
                    }
                }
                echo json_encode(['status' => 'success', 'message' => 'Assets deleted']);
            }
            break;

        default:
            throw new Exception('Invalid path');
    }
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()]);
}
